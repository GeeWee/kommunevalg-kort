import _ from 'lodash';
import {DateTime, Duration} from 'luxon';
import {FunctionComponent} from 'react';
import {KommuneEvent} from "../types"
import tableStyles from "../styles/table.module.css";

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

    const rows = eventsSortedByDate.map((event, index) => {
        // TODO do much better link validation here.
        let moreInfoTd = <td/>
        if (event.moreInfoLink){
            //not sure
            moreInfoTd = <td><a href={`https://${event.moreInfoLink}`}>https://{event.moreInfoLink}</a></td>
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
};
