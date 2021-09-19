import _ from 'lodash';
import {DateTime, Duration} from 'luxon';
import {FunctionComponent} from 'react';
import {KommuneEvent} from "../types"
import {convertLinkToFullFledged} from "../utils/link-validation-utils";

import tableStyles from "../styles/table.module.scss";
import {useWindowSize} from '@react-hook/window-size';
import {SMALL_SCREEN_BREAKPOINT} from "../utils/constants";

export interface AllKommunerEventListProps {
    events: KommuneEvent[]
}


export const AllKommunerEventsList: FunctionComponent<AllKommunerEventListProps> = ({events}) => {
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
        let moreInfoTd = <td/>
        if (event.moreInfoLink) {
            moreInfoTd = <td><a href={convertLinkToFullFledged(event.moreInfoLink)}>{event.moreInfoLink}</a></td>
        }
        return <tr key={index}>
            <td>{event.date.toLocaleString()}</td>
            <td>{event.name}</td>
            <td>{event.kommune}</td>
            <td>{event.place}</td>
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
                    <th>Kommune</th>
                    <th>Sted</th>
                    <th>Beskrivelse</th>
                    <th>Mere information</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                <tr>
                    <td colSpan={999} className={"text-center"}>Og mange flere...</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

function renderCards(eventsSortedByDate: KommuneEvent[]) {
    const cards = eventsSortedByDate.map((event, index) => {
        let moreInfoLink = null;
        if (event.moreInfoLink) {
            moreInfoLink = <a href={convertLinkToFullFledged(event.moreInfoLink)}>{event.moreInfoLink}</a>
        }

        return <div key={index} className="card my-2">
            <div className="card-body">
                <h5 className="card-title">{event.name}</h5>
                <h6 className="card-subtitle mb-2">
                    Dato: {event.date.toLocaleString()} <br/>
                    {event.kommune} kommune <br/>
                    Sted: {event.place}
                </h6>
                <p className="card-text">
                    {event.description}
                    <br/>
                    {moreInfoLink && <div>Mere info: {moreInfoLink}</div>}
                </p>
            </div>
        </div>
    })

    return <div>
        {cards}
    </div>
}
