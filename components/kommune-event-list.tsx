import _ from 'lodash';
import {DateTime, Duration} from 'luxon';
import {FunctionComponent} from 'react';
import {KommuneEvent} from "../types"
import {convertLinkToFullFledged} from "../utils/link-validation-utils";
import classNames from "classnames";

import tableStyles from "../styles/table.module.scss";
import {useWindowSize} from "@react-hook/window-size";
import {SMALL_SCREEN_BREAKPOINT} from "../utils/constants";
import {KommuneEventCard} from "./event-card";

export interface KommuneEventListProps {
    events: KommuneEvent[]
}

export const KommuneEventList: FunctionComponent<KommuneEventListProps> = ({events}) => {
    // TODO is this the right filtering? We show events from yesterday as well.
    const eventsNotOlderThanOneDay = events.filter(event => {
        return event.date >= DateTime.now().minus({days: 1}).startOf("day");
    })

    const eventsSortedByDate = _.sortBy(eventsNotOlderThanOneDay, event => {
        return event.date
    });

    const [width, height] = useWindowSize()


    if (width < SMALL_SCREEN_BREAKPOINT) {
        return renderCards(eventsSortedByDate);
    } else {
        return renderTable(eventsSortedByDate);
    }
};

function renderTable(eventsSortedByDate: KommuneEvent[]) {
    const rows = eventsSortedByDate.map((event, index) => {
        const isGlobal = event.kommune === "Landsdækkende";
        let moreInfoTd = <td/>
        if (event.moreInfoLink) {
            //not sure
            moreInfoTd =
                <td><a href={convertLinkToFullFledged(event.moreInfoLink)}>https://{event.moreInfoLink}</a></td>
        }


        return <tr key={index}>
            <td>{event.date.toLocaleString()}</td>
            <td>{event.name}</td>
            <td>{isGlobal && <>
                <div>Landsdækkende begivenhed:</div>
            </>}
                {event.place}
            </td>
            <td>{event.description}</td>
            {moreInfoTd}
        </tr>
    })

    return (
        <div>
            <table className={tableStyles.table}>
                <thead>
                <tr>
                    <th>Tidspunkt</th>
                    <th>Begivenhed</th>
                    <th>Sted</th>
                    <th>Beskrivelse</th>
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


function renderCards(eventsSortedByDate: KommuneEvent[]) {
    const cards = eventsSortedByDate.map((event, index) => {
        return <KommuneEventCard kommuneEvent={event} key={index} />
    })

    return <div>
        {cards}
    </div>
}
