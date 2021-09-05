import axios from 'axios';
import { google, sheets_v4 } from 'googleapis';
import _ from 'lodash';
import { DateTime } from 'luxon';
import { KommuneName, KommuneEvent, KommuneGroup } from '../types';
import {Begivenhed, Gruppe} from "../sheets-types";

describe('Sheets integration integration tests', () => {
    it('Fetching data from Begivenheder sheet', async () => {
        const values = await axios.get<Begivenhed[]>("https://script.google.com/macros/s/AKfycbzboDHSRLhg7ILtaPq9u_cZLm-isnLD0O913RX74hvicF05wLgHVzKBrnNHptW8zio_/exec?path=Begivenheder")
        console.log(values.data)
        const transformed : KommuneEvent[] = values.data.map( ( begivenhed ) => { 
            return { date : DateTime.fromFormat(begivenhed.Dato, "dd/MM/yy"),// begivenhed.Dato, //todo convert to datetime
                     time : begivenhed.Tidspunkt, 
                     name : begivenhed.Begivenhed,
                     kommune : begivenhed.Kommune as KommuneName,
                     place : begivenhed.Sted,
                     description : begivenhed.Info,
                     moreInfoLink : begivenhed.Link
                    }
        })
        console.log(transformed)
        console.log("Done -")
    });
    it('Fetching data from Grupper sheet', async () => {
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
        console.log(transformed)
        console.log("Done -")
    });
})


