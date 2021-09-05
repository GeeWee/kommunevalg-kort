import { google, sheets_v4 } from 'googleapis';
import _ from 'lodash';

/**
 Not sure how much of this is needed when using public sheets
 */
export const initGoogleAuth = async (privateKey: string, adminEmail: string): Promise<void> => {
    const googleClient = (await google.auth.getClient({
        credentials: {
            client_email: 'group-builder@unihelpr.iam.gserviceaccount.com',
            private_key: privateKey,
        },
        scopes: [
            'https://www.googleapis.com/auth/spreadsheets',
            'https://www.googleapis.com/auth/drive',
        ],
    })) as JWT;
    // Use 'subject' to impersonate a user that has access. See https://github.com/googleapis/google-api-nodejs-client/issues/1699#issuecomment-494897663
    googleClient.subject = adminEmail;
    google.options({ auth: googleClient });
};


/**
 * auto resize all columns in all sheets, based on the content
 */
export const autoResizeAllSheets = async (spreadsheetId: string) => {
    const allSheetIds = await getSheetIds(spreadsheetId, '');
    const autoResizeColumnsRequests = allSheetIds.map((sheetId) => ({
        autoResizeDimensions: {
            dimensions: {
                sheetId,
                dimension: 'COLUMNS',
            },
        },
    }));
    const autoResizeRowsRequests = allSheetIds.map((sheetId) => ({
        autoResizeDimensions: {
            dimensions: {
                sheetId,
                dimension: 'ROWS',
            },
        },
    }));
    return google.sheets('v4').spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
            requests: [...autoResizeColumnsRequests, ...autoResizeRowsRequests],
        },
    });
};

export const getSheetValues = async (
    spreadsheetId: string,
    range = 'Sheet1',
): Promise<any[][] | undefined | null> => {
    const response = await google.sheets('v4').spreadsheets.values.get({
        spreadsheetId,
        range,
    });

    if (!response) {
        throw new Error('Google Sheets API responded with an empty response');
    }
    if (!response.data) {
        throw new Error('Google Sheets API responded with empty data in the response');
    }
    return response.data.values;
};

/**
 * Updates a given cell with a value.
 * @param spreadsheetId - the id of the spreadsheet
 * @param cell - the id of the cell in A1 notation, e.g. "C2"
 * @param newValue - the value to put in the cell
 */
export async function updateCellValue(
    spreadsheetId: string,
    cell: string,
    newValue: any,
): Promise<any> {
    const writeOptions = {
        spreadsheetId: spreadsheetId,
        range: cell,
        valueInputOption: 'USER_ENTERED',
        requestBody: { values: [[newValue]] },
    };

    return google.sheets('v4').spreadsheets.values.update(writeOptions);
}

/**
 * Append n rows to a specific sheet.
 * @param spreadsheetId - the id of the spreadsheet to append to
 * @param range - The range in A1 notation of the sheet to search for a table to append to. You can just use "Sheet1"
 * if you want to search the entire sheet
 * @param rows - 1-n rows to append. It is your own responsibility to make sure they align with any columns if you need this.
 */
export async function appendToSheet(spreadsheetId: string, range: string, rows: any[][]) {
    const appendOptions: sheets_v4.Params$Resource$Spreadsheets$Values$Append = {
        spreadsheetId: spreadsheetId,
        // See https://developers.google.com/sheets/api/guides/concepts
        range: `${range}`,
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        requestBody: {
            values: rows,
        },
    };

    return google.sheets('v4').spreadsheets.values.append(appendOptions);
}

/**
 * Replace all the values in a given sheet, keeping the formatting.
 * @param spreadsheetId - The spreadsheet id
 * @param range - the range to clear and write to in A1 notation.
 * @param values - The rows to write
 */
export async function replaceSheetValues(spreadsheetId: string, range: string, values: any[][]) {
    await clearSheet(spreadsheetId, range);

    const writeOptions = {
        spreadsheetId,
        range,
        valueInputOption: 'USER_ENTERED',
        requestBody: { values },
    };

    return google.sheets('v4').spreadsheets.values.update(writeOptions);
}

export function clearSheet(spreadsheetId: string, range: string) {
    return google.sheets('v4').spreadsheets.values.clear({
        spreadsheetId,
        range,
    });
}

/**
 * Gets sheetIds for all sheets with the given prefix
 * Useful for making batchUpdate requests, where sheetId is necessary
 */
const getSheetIds = async (spreadsheetId: string, prefix: string): Promise<number[]> => {
    // get all existing sheets
    const {
        data: { sheets: existingSheets },
    } = await google.sheets('v4').spreadsheets.get({ spreadsheetId });
    if (!existingSheets) {
        return [];
    }

    return (
        existingSheets
            // find sheets that starts with prefix
            .filter((sheet) => _.get(sheet, 'properties.title', '').startsWith(prefix))
            // convert those sheets to sheetIds
            .map((existingExternalSheet) => _.get(existingExternalSheet, 'properties.sheetId'))
    );
};
