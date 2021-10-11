// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {KommuneEvent, KommuneEventFromServer, KommuneName} from "../../types";
import {DateTime} from "luxon";
import axios from "axios";
import {Begivenhed} from "../../sheets-types";
import {queryCache} from "../../cache/cache";
import {getEvents} from "../../cache/data-fetchers";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<KommuneEventFromServer[]>
) {
  let events: KommuneEvent[] | undefined = queryCache.get<KommuneEvent[]>("events");
  if (!events){
    events = await getEvents();
  }


  //@ts-ignore - datetime is serialized into json string
  res.status(200).json(events as KommuneEventFromServer[])
}
