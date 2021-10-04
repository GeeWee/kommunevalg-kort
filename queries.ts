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
    const values = await axios.get<Begivenhed[]>("https://script.google.com/macros/s/AKfycbyy4FpLqqONhb-eYFwX26r-kyCyYrrUU4rlOdj6g4Yulv4_59zy_ab4H6HEsL8s9DHJew/exec?path=Begivenheder", {
        headers: {
            "Content-Type": "text/plain"
        }
    })
    console.log("Events", values.data)
    const transformed : KommuneEvent[] = values.data.map( ( begivenhed ) => {
        return { date : DateTime.fromISO(begivenhed.Dato),
            time : begivenhed.Tidspunkt,
            name : begivenhed["Begivenhedens titel"],
            kommune : begivenhed.Kommune as KommuneName,
            place : begivenhed["Adresse"],
            moreInfoLink : begivenhed["Link til mere information"]
        }
    })

    const filtered = transformed.filter(event => {
        return event.date >= DateTime.now().minus({days: 1}).startOf("day");
    })

    return filtered;


}


export async function getGroups(): Promise<KommuneGroup[]>{
    const values = await axios.get<Gruppe[]>("https://script.google.com/macros/s/AKfycbyy4FpLqqONhb-eYFwX26r-kyCyYrrUU4rlOdj6g4Yulv4_59zy_ab4H6HEsL8s9DHJew/exec?path=Lokale Grupper")
    console.log("Grupper", values.data)
    const transformed : KommuneGroup[] = values.data.map( ( gruppe ) => {
        return { person: gruppe["Kontakt"],
            groupName: gruppe["Gruppens navn"],
            //@ts-ignore // TODO fix when Klimabevægelsen update their sheet
            kommune: gruppe.Kommune as KommuneName ?? "Lyngby-Taarbæk",
            description: gruppe["Beskrivelse af gruppen"],
            meetings: gruppe["Mdefrekvens"],
            location: gruppe["Mdested"]
        }
    })
    return transformed;
}
