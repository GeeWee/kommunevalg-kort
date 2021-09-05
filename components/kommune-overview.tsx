import {FunctionComponent} from 'react';
import {KommuneEvent, KommuneName} from "../types";
import {KommuneGroupList} from "./kommune-group-list";
import {KommuneEventList} from "./kommune-event-list";
import {DateTime} from "luxon";
import axios from 'axios';
import {useQuery} from "react-query";
import {getEvents, getGroups, useKommuneEvents, useKommuneGroups} from "../queries";

export interface KommuneOverviewProps {
    name: KommuneName
}

export const KommuneOverview: FunctionComponent<KommuneOverviewProps> = (props) => {
    const events = useKommuneEvents(props.name);
    const groups = useKommuneGroups(props.name);

    // todo error handling
    // TODO empty state
    let eventList = <div></div>;
    if (events !== undefined){
        eventList = <KommuneEventList events={events}>
        </KommuneEventList>
    }

    // TODO empty state
    let groupList = <div></div>;
    if (groups !== undefined){
        groupList = <KommuneGroupList groups={groups}>
        </KommuneGroupList>
    }

    return (
        <div>
            <h1>{props.name}</h1>
            <div>
                {groupList}
            </div>
            <div>
                {eventList}
            </div>
        </div>
    )
};
