import {FunctionComponent} from 'react';

export interface KommuneEventListProps {

}

export const KommuneEventList: FunctionComponent<KommuneEventListProps> = (props) => {
    // TODO get events in as props
    // TODO sort events by date
    const events = [
        {
            name: 'Stor demo',
            kommune: 'Den sejeste kommune',
            date: 'woo' // use luxon here

        }
    ]

    return (
        <div>
            {
                JSON.stringify(events)
            }
        </div>
    )
};
