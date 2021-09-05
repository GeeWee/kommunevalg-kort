import _ from 'lodash';
import {DateTime, Duration} from 'luxon';
import {FunctionComponent} from 'react';
import {KommuneGroup} from "../types";

export interface KommuneGroupList {
    groups: KommuneGroup[]
}

export const KommuneGroupList: FunctionComponent<KommuneGroupList> = (props) => {
    return (
        <div>
            <h1>Grupper</h1>
            <pre>
            {
                JSON.stringify(props.groups, null, 2)
            }
            </pre>
        </div>
    )
};
