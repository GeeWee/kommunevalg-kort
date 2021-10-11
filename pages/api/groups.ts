// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {KommuneEvent, KommuneGroup, KommuneName} from "../../types";
import {DateTime} from "luxon";
import axios from "axios";
import {Begivenhed, Gruppe} from "../../sheets-types";
import {queryCache} from "../../cache/cache";
import {getEvents} from "../../cache/data-fetchers";
import {getGroups} from "../../queries";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<KommuneGroup[]>
) {

  let groups: KommuneGroup[] | undefined = queryCache.get<KommuneGroup[]>("groups");
  if (!groups){
    groups = await getGroups();
  }

  res.status(200).json(groups)
}
