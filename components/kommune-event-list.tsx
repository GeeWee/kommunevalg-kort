import _ from 'lodash';
import {DateTime, Duration} from 'luxon';
import {FunctionComponent} from 'react';

export interface KommuneEventListProps {

}

export const KommuneEventList: FunctionComponent<KommuneEventListProps> = (props) => {
    // TODO get events in as props
    const events = [
        {
            name: 'Stor demo 1 (old)',
            kommune: 'Den sejeste kommune',
            place: "Online",
            description: 'blabla',
            moreInformation: 'www.google.com',
            date: DateTime.now().minus({days: 2})
        },
        {
            name: 'Stor demo 2 (old)',
            kommune: 'Den sejeste kommune',
            place: "Online",
            description: 'blabla',
            moreInformation: 'www.google.com',
            date: DateTime.now().minus({days: 1})
        },
        {
            name: 'Stor demo 4 (new)',
            kommune: 'Den sejeste kommune',
            place: "Online",
            description: 'blabla',
            moreInformation: 'www.google.com',
            date: DateTime.now().plus({days: 8})
        },
        {
            name: 'Stor demo 3 (new)',
            kommune: 'Den sejeste kommune',
            place: "Online",
            description: 'blabla',
            moreInformation: 'www.google.com',
            date: DateTime.now().plus({days: 3})
        },
    ]

    // TODO is this the right filtering? We show events from yesterday as well.
    const eventsNotOlderThanOneDay = events.filter(event => {
        return event.date >= DateTime.now().minus({days: 1}).startOf("day");
    })


    const eventsSortedByDate = _.sortBy(eventsNotOlderThanOneDay, event => {
        return event.date
    });


    return (
        <div>
            <pre>
            {
                JSON.stringify(eventsSortedByDate, null, 2)
            }
            </pre>
        </div>
    )
};
