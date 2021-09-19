import {FunctionComponent} from 'react';
import {KommuneName} from "../types";
import {KommuneGroupList} from "./kommune-group-list";
import {KommuneEventList} from "./kommune-event-list";
import {useKommuneEvents, useKommuneGroups} from "../queries";

export interface KommuneOverviewProps {
    name: KommuneName
}

export const KommuneOverview: FunctionComponent<KommuneOverviewProps> = (props) => {
    const kommuneEvents = useKommuneEvents(props.name);
    const globalEvents = useKommuneEvents("Landsdækkende");


    const groups = useKommuneGroups(props.name);

    // todo error handling
    // TODO loading state
    let eventList = <div></div>;
    if (kommuneEvents !== undefined && globalEvents !== undefined) {
        const hasKommuneEvents = kommuneEvents.length !== 0;
        eventList = <>
            {!hasKommuneEvents && <p>
                Vi har ikke nogen lokale events i din kommune lige nu.
                Vi foreslår du deltager i en af de landsdækkende begivenheder nedenunder.
                Hvis du har mod på at lave et event eller du gerne vil af vide når der kommer events, så kan du <a
                href="https://www.klimabevaegelsen.dk/kommunalvalg">tilmelde dig Klimabevægelsens Kampagnehold.</a>
            </p>
            }
            <KommuneEventList events={[...globalEvents, ...kommuneEvents]}>
            </KommuneEventList>
        </>
    }

    // TODO loading state
    // TODO error handling
    let groupList = <div></div>;
    if (groups !== undefined) {
        groupList = <KommuneGroupList groups={groups}>
        </KommuneGroupList>
    }

    return (
        <div>
            <h1>{props.name}</h1>
            <div>
                <h1>Grupper</h1>
                {groupList}
            </div>
            <div>
                <h1>Begivenheder</h1>
                {eventList}
            </div>
        </div>
    )
}
;
