import NodeCache from "node-cache";
import axios from "axios";
import {Gruppe} from "../sheets-types";
import {KommuneGroup, KommuneName} from "../types";
import {getEvents, getGroups} from "./data-fetchers";


export const queryCache = new NodeCache({stdTTL: 180}); // cache for 3 minutes

console.log("THIS CODE IS RUN ONCE");

async function getAndAddGroups() {
    const groups = await getGroups();
    queryCache.set("groups", groups);
    console.log(`added ${groups.length} groups to cache`);
}

async function getAndAddEvents() {
    const events = await getEvents();
    queryCache.set("events", events);
    console.log(`added ${events.length} events to cache`);
}

// Refresh every minute.
setInterval(async () => {
    await getAndAddGroups();
    await getAndAddEvents();
}, 60_000)

// Initial cache seeding. Promises here are ignored.
getAndAddGroups();
getAndAddEvents();

