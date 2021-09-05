import axios from 'axios';
import { google, sheets_v4 } from 'googleapis';
import _ from 'lodash';

interface Begivenhed {
    Tidspunkt  : string,
    Begivenhed : string,
    Kommune    : string,
    Sted       : string,
    Info       : string
}

describe('Sheets integration integration tests', () => {
    it('Should be able to read from public sheet', async () => {
        const values = await axios.get<Begivenhed[]>("https://script.google.com/macros/s/AKfycbzboDHSRLhg7ILtaPq9u_cZLm-isnLD0O913RX74hvicF05wLgHVzKBrnNHptW8zio_/exec?path=Ark1")
        console.log(values.data)
        console.log("Done -")
    });
})
