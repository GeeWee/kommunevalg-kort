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
                {!hasKommuneEvents ? <p>
                    Vi har ikke nogen lokale events i din kommune lige nu.
                    Vi foreslår du deltager i en af de landsdækkende begivenheder ovenfor.
                </p> : <KommuneEventList events={[...globalEvents, ...kommuneEvents]}/>
                }
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
                <div className={"mb-3"}>
                    <h2 className={"text-center"}>Grupper i {props.name}</h2>
                    {groupList}
                </div>
                <div>
                    <h2 className="text-center">Begivenheder i {props.name}</h2>
                    {eventList}
                </div>
                <p>
                    Vil du gerne holdes opdateret omkring når der sker noget nyt i din kommune? Meld dig til <a
                    href="https://www.klimabevaegelsen.dk/kommunalvalg" target="_top">Klimabevægelsens Kampagnehold.</a>
                </p>
            </div>
        )
    }
;
