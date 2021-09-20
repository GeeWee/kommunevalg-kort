import type {NextPage} from 'next'
import Head from 'next/head'
import {KommuneCombobox} from "../components/kommune-combobox";
import {KommuneName} from "../types";
import {useState} from "react";
import {KommuneOverview} from "../components/kommune-overview";
import {useAllEvents, useAllGroups, useKommuneEvents} from "../queries";
import {AllKommunerEventsList} from "../components/all-kommuner-event-list";
import Script from 'next/script'
import {GlobalEventList} from "../components/global-event-list";

const Home: NextPage = () => {
    const [kommune, setKommune] = useState<KommuneName | undefined>(undefined);

    // noinspection JSUnusedLocalSymbols
    const allGroupsUnused = useAllGroups(); // To fetch the data so we cache it for later.
    const globalEvents = useKommuneEvents("Landsdækkende");
    const allEvents = useAllEvents()
        ?.slice(0, 10);


    let kommuneSpecificContent;
    if (kommune === undefined) {
        kommuneSpecificContent = null;
    } else {
        kommuneSpecificContent = <KommuneOverview name={kommune}>

        </KommuneOverview>
    }

    return (
        <>
            <Head>
                <title>Klimabevægelsens kort</title>
                <meta name="description"
                      content="En liste over begivenheder og grupper til klimabevægelsens kommunalvalg 2021."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={"card fat-card-border"}>
                <div className="card-header mb-2 background-primary sticky-header">
                    <h1 className="text-center">Klima-begivenheder nær dig</h1>
                </div>
                <div className="card-content p-2">
                    <div className={"mb-4"}>
                        <h2 className="text-center">Landsdækkende begivenheder</h2>
                        {globalEvents && <GlobalEventList events={globalEvents}/>}
                    </div>


                    <div>
                        <h2 className="text-center">Se begivenheder og lokalgrupper i din kommune</h2>
                        <KommuneCombobox value={kommune} onChange={setKommune} instanceId={"sdfsfsd"}/>
                    </div>

                    <div className={"mb-3 mt-3"}>
                        {kommuneSpecificContent}
                    </div>

                    <div>
                        <h2 className="text-center">Kommende begivenheder i alle kommuner</h2>
                        {allEvents && <AllKommunerEventsList events={allEvents}/>}
                    </div>

                </div>
            </main>

            <Script
                src="/iframeResizer.contentWindow.min.js"
                strategy="beforeInteractive"
            />
        </>
    )
}

export default Home;
