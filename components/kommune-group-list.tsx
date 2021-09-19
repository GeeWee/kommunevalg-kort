import _ from 'lodash';
import {DateTime, Duration} from 'luxon';
import {FunctionComponent} from 'react';
import {KommuneGroup} from "../types";
import tableStyles from "../styles/table.module.css";

export interface KommuneGroupList {
    groups: KommuneGroup[]
}

export const KommuneGroupList: FunctionComponent<KommuneGroupList> = (props) => {
    // Empty state for groups
    if (props.groups.length === 0){
        return <div>
            Vi har pt. ikke information om nogle lokale grupper i din kommune.
            Hvis du er med i en gruppe som ikke står her, eller du gerne vil være med til at starte en gruppe så kan du <a
            href="https://www.klimabevaegelsen.dk/kommunalvalg">tilmelde dig Klimabevægelsens Kampagnehold</a>
        </div>
    }


    const rows = props.groups.map((group, index) => {

        return <tr key={index}>
            <td>{group.groupName}</td>
            <td>{group.description}</td>
            <td>{group.location}</td>
            <td>{group.meetings}</td>
            <td>{group.person}</td>
        </tr>
    })

    return (
        <div>
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
