import _ from 'lodash';
import {DateTime, Duration} from 'luxon';
import {FunctionComponent} from 'react';
import {KommuneGroup} from "../types";
import tableStyles from "../styles/table.module.css";

export interface KommuneGroupList {
    groups: KommuneGroup[]
}

export const KommuneGroupList: FunctionComponent<KommuneGroupList> = (props) => {
    const rows = props.groups.map(group => {

        return <tr>
            <td>{group.groupName}</td>
            <td>{group.description}</td>
            <td>{group.location}</td>
            <td>{group.meetings}</td>
            <td>{group.person}</td>
        </tr>
    })

    return (
        <div>
            <h1>Grupper</h1>
            <table className={tableStyles.table}>
                <thead>
                <tr>
                    <th>Navn</th>
                    <th>Beskrivelse</th>
                    <th>Mødested</th>
                    <th>Mødefrekvens</th>
                    <th>Mere information</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        </div>
    )
};
