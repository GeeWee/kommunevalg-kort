import axios from 'axios';
import { google, sheets_v4 } from 'googleapis';
import _ from 'lodash';
import { DateTime } from 'luxon';
import { KommuneName, KommuneEvent } from '../types';

interface Begivenhed {
    Dato       : string,
    Tidspunkt  : string, 
    Begivenhed : string,
    Kommune    : string, 
    Sted       : string,
    Info       : string,
    Link       : string
}

describe('Sheets integration integration tests', () => {
    it('Should be able to read from public sheet', async () => {
        const values = await axios.get<Begivenhed[]>("https://script.google.com/macros/s/AKfycbzboDHSRLhg7ILtaPq9u_cZLm-isnLD0O913RX74hvicF05wLgHVzKBrnNHptW8zio_/exec?path=Ark1")
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
})
