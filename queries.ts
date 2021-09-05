import axios from "axios";
import {KommuneEvent, KommuneGroup, KommuneName} from "./types";
import {DateTime} from "luxon";
import {Begivenhed, Gruppe} from "./sheets-types";

export async function getEvents(): Promise<KommuneEvent[]>{
    const values = await axios.get<Begivenhed[]>("https://script.google.com/macros/s/AKfycbzboDHSRLhg7ILtaPq9u_cZLm-isnLD0O913RX74hvicF05wLgHVzKBrnNHptW8zio_/exec?path=Begivenheder", {
        headers: {
            "Content-Type": "text/plain"
        }
    })
    console.log(values.data)
    const transformed : KommuneEvent[] = values.data.map( ( begivenhed ) => {
        return { date : DateTime.fromISO(begivenhed.Dato),// begivenhed.Dato, //todo convert to datetime
            time : begivenhed.Tidspunkt,
            name : begivenhed.Begivenhed,
            kommune : begivenhed.Kommune as KommuneName,
            place : begivenhed.Sted,
            description : begivenhed.Info,
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
