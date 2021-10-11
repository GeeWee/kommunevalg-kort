import axios from "axios";
import {GlobalEvent, KommuneEvent, KommuneEventFromServer, KommuneGroup, KommuneName} from "./types";
import {DateTime} from "luxon";
import {Begivenhed, Gruppe} from "./sheets-types";
import {useQuery} from "react-query";

export function useAllEvents(): KommuneEvent[] | undefined {
    const eventQuery = useQuery('events', getEvents)
    if (eventQuery.data){
        return eventQuery.data;
    }
    return undefined;
}

export function useKommuneEvents(kommuneName: KommuneName | GlobalEvent | undefined): KommuneEvent[] | undefined {
    const eventQuery = useQuery('events', getEvents);
    if (kommuneName === undefined){
        return;
    }
    if (eventQuery.data){
        return eventQuery.data.filter(event => {
            return event.kommune === kommuneName
        });
    }
    return;
}

export function useKommuneGroups(kommuneName: KommuneName | undefined): KommuneGroup[] | undefined{
    const groupsQuery = useQuery('groups', getGroups)

    if (kommuneName === undefined){
        return;
    }

    if (groupsQuery.data){
        return groupsQuery.data.filter(group => {
            return group.kommune === kommuneName
        });
    }
    return undefined;
}

export function useAllGroups(): KommuneGroup[] | undefined{
    const groupsQuery = useQuery('groups', getGroups)
    if (groupsQuery.data){
        return groupsQuery.data;
    }
    return undefined;
}


export async function getEvents(): Promise<KommuneEvent[]>{
    const values = await axios.get<KommuneEventFromServer[]>("/api/events");

    console.log("Events", values.data)

    // parse string to actual datetime object
    const transformed: KommuneEvent[] = values.data.map(event => ({
        ...event,
        date: DateTime.fromISO(event.date),
    }));

    const filtered = transformed.filter(event => {
        return event.date >= DateTime.now().minus({days: 1}).startOf("day");
    })

    return filtered;
}


export async function getGroups(): Promise<KommuneGroup[]>{
    const values = await axios.get<KommuneGroup[]>("api/groups")
    console.log("Grupper", values.data)
    return values.data;
}
