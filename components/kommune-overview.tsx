import {FunctionComponent} from 'react';
import {KommuneEvent, KommuneName} from "../types";
import {KommuneGroupList} from "./kommune-group-list";
import {KommuneEventList} from "./kommune-event-list";
import {DateTime} from "luxon";
import axios from 'axios';
import {useQuery} from "react-query";
import {getEvents, getGroups} from "../queries";

export interface KommuneOverviewProps {
    name: KommuneName
}

export const KommuneOverview: FunctionComponent<KommuneOverviewProps> = (props) => {
    const eventQuery = useQuery('events', getEvents)
    const groupsQuery = useQuery('events', getGroups)

    // TODO filter on kommune for data

    // TODO empty state
    let eventList;
    if (eventQuery.isSuccess){
        console.log(eventQuery.data);
        eventList = <KommuneEventList events={eventQuery.data}>
        </KommuneEventList>
    } else {
        eventList = <div></div>;
    }

    // TODO empty state
    let groupList;
    if (groupsQuery.isSuccess){
        console.log(groupsQuery.data);
        groupList = <KommuneGroupList groups={groupsQuery.data}>
        </KommuneGroupList>
    } else {
        groupList = <div></div>;
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
