import _ from 'lodash';
import {DateTime, Duration} from 'luxon';
import {FunctionComponent} from 'react';
import {KommuneEvent} from "../types"
import {convertLinkToFullFledged} from "../utils/link-validation-utils";
import cardStyles from "../styles/cards.module.scss";

import tableStyles from "../styles/table.module.scss";
import {useWindowSize} from '@react-hook/window-size';
import {SMALL_SCREEN_BREAKPOINT} from "../utils/constants";
import {KommuneEventCard} from "./event-card";

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

    return renderCards(eventsSortedByDate);

};


function renderCards(eventsSortedByDate: KommuneEvent[]) {
    const cards = eventsSortedByDate.map((event, index) => {
        return <KommuneEventCard kommuneEvent={event} key={index} />
    })

    return <div>
        {cards}
    </div>
}
