import axios from "axios";
import {GlobalEvent, KommuneEvent, KommuneGroup, KommuneName} from "./types";
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
    const values = await axios.get<Begivenhed[]>("https://script.google.com/macros/s/AKfycbzboDHSRLhg7ILtaPq9u_cZLm-isnLD0O913RX74hvicF05wLgHVzKBrnNHptW8zio_/exec?path=Begivenheder", {
        headers: {
            "Content-Type": "text/plain"
        }
    })
    console.log(values.data)
    const transformed : KommuneEvent[] = values.data.map( ( begivenhed ) => {
        return { date : DateTime.fromISO(begivenhed.Dato),
            time : begivenhed.Tidspunkt,
            name : begivenhed.Begivenhed,
            kommune : begivenhed.Kommune as KommuneName,
            place : begivenhed.Sted,
            moreInfoLink : begivenhed.Link
        }
    })
    return transformed;
}


export async function getGroups(): Promise<KommuneGroup[]>{
    const values = await axios.get<Gruppe[]>("https://script.google.com/macros/s/AKfycbzboDHSRLhg7ILtaPq9u_cZLm-isnLD0O913RX74hvicF05wLgHVzKBrnNHptW8zio_/exec?path=Grupper")
    console.log(values.data)
    const transformed : KommuneGroup[] = values.data.map( ( gruppe ) => {
        return { person: gruppe.Kontaktperson,
            groupName: gruppe.Gruppenavn,
            kommune: gruppe.Kommune as KommuneName,
            description: gruppe.Beskrivelse,
            meetings: gruppe.Møder,
            location: gruppe.Lokation
        }
    })
    return transformed;
}
