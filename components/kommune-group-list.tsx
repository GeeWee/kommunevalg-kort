import _ from 'lodash';
import {DateTime, Duration} from 'luxon';
import {FunctionComponent} from 'react';
import {KommuneEvent, KommuneGroup} from "../types";
import tableStyles from "../styles/table.module.scss";
import {convertLinkToFullFledged} from "../utils/link-validation-utils";
import {useWindowSize} from "@react-hook/window-size";
import {SMALL_SCREEN_BREAKPOINT} from "../utils/constants";
import cardStyles from "../styles/cards.module.scss";
import {SignUpLink} from "./sign-up-link";

export interface KommuneGroupList {
    groups: KommuneGroup[]
}

export const KommuneGroupList: FunctionComponent<KommuneGroupList> = (props) => {
    const [width, height] = useWindowSize()

    // Empty state for groups
    if (props.groups.length === 0){
        return <div>
            Vi har pt. ikke information om nogle lokale grupper i din kommune.
            Hvis du er med i en gruppe som ikke står her, eller du gerne vil være med til at starte en gruppe så kan du
            <SignUpLink>tilmelde dig Klimabevægelsens Kampagnehold.</SignUpLink>
        </div>
    }

    if (width < SMALL_SCREEN_BREAKPOINT) {
        return renderCards(props.groups);
    } else {
        return renderTable(props.groups);
    }


};

function renderTable(groups: KommuneGroup[]){
    const rows = groups.map((group, index) => {
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
}

function renderCards(groups: KommuneGroup[]) {
    const cards = groups.map((group, index) => {

        return <div key={index} className="card my-2">
            <div className={`card-header ${cardStyles.blueHeader}`}>
                <h5 className="card-title">{group.groupName}</h5>
            </div>
            <div className="card-body">
                <h6 className="card-subtitle mb-2">
                    Mødes: {group.meetings}<br/>
                    Lokation: {group.location}

                </h6>
                <div className="card-text">
                    <p>
                    {group.description}
                    </p>
                    <div className={"fw-bolder"}>Kontaktperson:</div> {group.person}
                </div>
            </div>
        </div>
    })

    return <div>
        {cards}
    </div>
}
