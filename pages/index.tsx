import type {NextPage} from 'next'
import Head from 'next/head'
import {KommuneCombobox} from "../components/kommune-combobox";
import {GlobalEvent, KommuneName} from "../types";
import {useState} from "react";
import {KommuneOverview} from "../components/kommune-overview";
import {useAllEvents, useAllGroups, useKommuneEvents} from "../queries";
import {KommuneEventList} from "../components/kommune-event-list";
import {AllKommunerEventsList} from "../components/all-kommuner-event-list";

const Home: NextPage = () => {
    const [kommune, setKommune] = useState<KommuneName | undefined>(undefined);

    // noinspection JSUnusedLocalSymbols
    const allGroupsUnused = useAllGroups(); // To fetch the data so we cache it for later.
    const globalEvents = useKommuneEvents("Landsdækkende");
    const allEvents = useAllEvents()
        ?.filter(event => event.kommune !== "Landsdækkende")
        ?.slice(0, 10);


    let content;
    if (kommune === undefined) {
        content = null;
    } else {
        content = <KommuneOverview name={kommune}>

        </KommuneOverview>
    }

    return (
        <div>
            <Head>
                <title>Klimabevægelsens kort</title>
                <meta name="description" content="En liste over begivenheder og grupper til klimabevægelsens kommunalvalg 2021."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <>
                    <div>
                        <h1>Kommende landsdækkende begivenheder</h1>
                        {globalEvents && <AllKommunerEventsList events={globalEvents}/>}
                    </div>

                    <div>
                        <h1>Kommende begivenheder i alle kommuner</h1>
                        {allEvents && <AllKommunerEventsList events={allEvents} />}
                    </div>

                    <div>
                        <h1>Se events og lokalgrupper i din kommune</h1>
                        <KommuneCombobox value={kommune} onChange={setKommune} instanceId={"sdfsfsd"}/>
                    </div>
                </>

                {content}
            </main>

        </div>
    )
}

export default Home
