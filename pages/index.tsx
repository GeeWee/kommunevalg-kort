import type {NextPage} from 'next'
import Head from 'next/head'
import {KommuneCombobox} from "../components/kommune-combobox";
import {GlobalEvent, KommuneName} from "../types";
import {useState} from "react";
import {KommuneOverview} from "../components/kommune-overview";
import {useAllEvents, useAllGroups, useKommuneEvents} from "../queries";
import {KommuneEventList} from "../components/kommune-event-list";
import {AllKommunerEventsList} from "../components/all-kommuner-event-list";
import {KommuneLeafletMap} from '../components/kommune-leaflet-map';

const Home: NextPage = () => {
    const [kommune, setKommune] = useState<KommuneName | undefined>(undefined);

    // noinspection JSUnusedLocalSymbols
    const allGroupsUnused = useAllGroups(); // To fetch the data so we cache it for later.
    const globalEvents = useKommuneEvents("Landsdækkende");
    const allEvents = useAllEvents()
        ?.filter(event => event.kommune !== "Landsdækkende")
        ?.slice(0, 10);

    return (
        <div>
            <Head>
                <title>Klimabevægelsens kort</title>
                <meta name="description" content="En liste over begivenheder og grupper til klimabevægelsens kommunalvalg 2021."/>
                <link rel="icon" href="/favicon.ico"/>

                {/* leaflet imports */}
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
                      integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
                      crossorigin="" />
                <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
                        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
                        crossorigin="" />
            </Head>
            <main>
                <>
                    <div>
                        <h1>Kommende landsdækkende begivenheder</h1>
                        {globalEvents && <AllKommunerEventsList events={globalEvents}/>}
                    </div>

                    <div>
                        <h1>Se events og lokalgrupper i din kommune</h1>
                        <KommuneLeafletMap value={kommune} onChange={setKommune} />
                        <KommuneCombobox value={kommune} onChange={setKommune} instanceId={"sdfsfsd"}/>
                    </div>

                    {kommune && <KommuneOverview name={kommune} />}

                    <div>
                        <h1>Kommende begivenheder i alle kommuner</h1>
                        {allEvents && <AllKommunerEventsList events={allEvents} />}
                    </div>
                </>
            </main>
        </div>
    )
}

export default Home
