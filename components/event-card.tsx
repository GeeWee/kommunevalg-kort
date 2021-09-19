import {FunctionComponent} from 'react';
import {convertLinkToFullFledged} from "../utils/link-validation-utils";
import cardStyles from "../styles/cards.module.scss";
import {KommuneEvent} from "../types";

export interface KommuneEventCardProps {
    kommuneEvent: KommuneEvent
}

export const KommuneEventCard: FunctionComponent<KommuneEventCardProps> = ({kommuneEvent}) => {
    let moreInfoLink = null;
    if (kommuneEvent.moreInfoLink) {
        moreInfoLink = <a href={convertLinkToFullFledged(kommuneEvent.moreInfoLink)}>{kommuneEvent.moreInfoLink}</a>
    }

    const isGlobal = kommuneEvent.kommune === "Landsdækkende";
    const kommuneString = isGlobal ? "Landsdækkende kommuneEvent" : `${kommuneEvent.kommune} kommune`

    return <div className="card my-2">
        <div className={`card-header ${cardStyles.blueHeader}`}>
            <h5>{kommuneEvent.name}</h5>
        </div>
        <div className="card-body">
            <h6 className="card-subtitle mb-2">
                Dato: {kommuneEvent.date.toLocaleString()} <br/>
                {kommuneString} <br/>
                Sted: {kommuneEvent.place}
            </h6>
            <p className="card-text">
                {kommuneEvent.description}
                <br/>
                {moreInfoLink && <div>Mere info: {moreInfoLink}</div>}
            </p>
        </div>
    </div>
};
