import {KommuneEvent, KommuneGroup, KommuneName} from "../types";
import axios from "axios";
import {Begivenhed, Gruppe} from "../sheets-types";
import {DateTime} from "luxon";

export async function getGroups(): Promise<KommuneGroup[]> {
    const url = "https://script.google.com/macros/s/AKfycbyy4FpLqqONhb-eYFwX26r-kyCyYrrUU4rlOdj6g4Yulv4_59zy_ab4H6HEsL8s9DHJew/exec?path=Lokale Grupper"

    const values = await axios.get<Gruppe[]>(url, {
        headers: {
            "Content-Type": "text/plain"
        }
    })

    const transformed: KommuneGroup[] = values.data.map((gruppe) => {
        return {
            person: gruppe["Kontakt"],
            groupName: gruppe["Gruppens navn"],
            //@ts-ignore // TODO fix when Klimabevægelsen update their sheet
            kommune: gruppe.Kommune as KommuneName,
            description: gruppe["Beskrivelse af gruppen"],
            meetings: gruppe["Mdefrekvens"],
            location: gruppe["Mdested"]
        }
    });

    return transformed;

}


export async function getEvents(){
    const url = "https://script.google.com/macros/s/AKfycbyy4FpLqqONhb-eYFwX26r-kyCyYrrUU4rlOdj6g4Yulv4_59zy_ab4H6HEsL8s9DHJew/exec?path=Begivenheder"

    const values = await axios.get<Begivenhed[]>(url, {
        headers: {
            "Content-Type": "text/plain"
        }
    })

    const transformed: KommuneEvent[] = values.data.map((begivenhed) => {
        return {
            date: DateTime.fromISO(begivenhed.Dato),
            time: begivenhed.Tidspunkt,
            name: begivenhed["Begivenhedens titel"],
            kommune: begivenhed.Kommune as KommuneName,
            place: begivenhed["Adresse"],
            moreInfoLink: begivenhed["Link til mere information"]
        }
    })

    return transformed;
}
