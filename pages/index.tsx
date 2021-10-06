import type {NextPage} from 'next'
import Head from 'next/head'
import {KommuneCombobox} from "../components/kommune-combobox";
import {KommuneName} from "../types";
import {useState} from "react";
import {useAllEvents, useAllGroups, useKommuneEvents, useKommuneGroups} from "../queries";
import {AllKommunerEventsList} from "../components/all-kommuner-event-list";
import Script from 'next/script'
import {KommuneEventList} from "../components/kommune-event-list";
import {KommuneGroupList} from "../components/kommune-group-list";
import {SignUpLink} from "../components/sign-up-link";

const Home: NextPage = () => {
    const [kommune, setKommune] = useState<KommuneName | undefined>(undefined);

    // noinspection JSUnusedLocalSymbols
    const allGroupsUnused = useAllGroups(); // To fetch the data so we cache it for later.
    const globalEvents = useKommuneEvents("Landsdækkende");
    const allEvents = useAllEvents();

    const kommuneEvents = useKommuneEvents(kommune);

    const groups = useKommuneGroups(kommune);

    // todo error handling
    // TODO loading state
    let eventList = <div/>;
    if (kommuneEvents !== undefined || globalEvents !== undefined) {
        const hasKommuneEvents = kommuneEvents?.length !== 0;
        eventList = <>
            <KommuneEventList events={[...globalEvents?.slice(0,3) || [], ...kommuneEvents || []]}/>
            {!hasKommuneEvents && <p>Vi har ikke nogen lokale events i din kommune lige nu.
                Vi foreslår du deltager i en af de landsdækkende begivenheder ovenfor.</p>}
        </>
    }

    // TODO loading state
    // TODO error handling
    let groupList = <div/>;
    if (groups !== undefined) {
        groupList = (<div>
            <div className={"my-3"}>
                <h2 className={"text-center"}>Grupper i {kommune}</h2>
                <KommuneGroupList groups={groups} kommuneName={kommune as KommuneName}>
                </KommuneGroupList>
            </div>
        </div>);
    }

    console.log({allEvents});


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

                    <div>
                        <h2 className="text-center">Se begivenheder og lokalgrupper i din kommune</h2>
                        <KommuneCombobox value={kommune} onChange={setKommune} instanceId={"sdfsfsd"}/>
                    </div>

                    <div className={"mb-3 mt-3"}>
                        <div>
                            <div>
                                {eventList}
                            </div>

                            {groupList}

                            <p>
                                Vil du gerne holdes opdateret omkring når der sker noget nyt i din kommune? Meld dig til <SignUpLink>Klimabevægelsens Kampagnehold.</SignUpLink>
                            </p>
                        </div>
                    </div>

                    { !kommune && <div>
                        <h2 className="text-center">Lokale og landsdækkende begivenheder</h2>
                        {allEvents && <AllKommunerEventsList events={allEvents}/>}
                    </div> }


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
