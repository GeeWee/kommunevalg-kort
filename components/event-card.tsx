import {FunctionComponent} from 'react';
import {convertLinkToFullFledged} from "../utils/link-validation-utils";
import cardStyles from "../styles/cards.module.scss";
import {KommuneEvent} from "../types";
import {DateTime} from "luxon";

export interface KommuneEventCardProps {
    kommuneEvent: KommuneEvent
}

export const KommuneEventCard: FunctionComponent<KommuneEventCardProps> = ({kommuneEvent}) => {
    let moreInfoLink = null;
    if (kommuneEvent.moreInfoLink) {
        moreInfoLink =
            <a href={convertLinkToFullFledged(kommuneEvent.moreInfoLink)} target="_top">{kommuneEvent.moreInfoLink}</a>
    }

    const isGlobal = kommuneEvent.kommune === "Landsdækkende";
    const kommuneString = isGlobal ? "Landsdækkende begivenhed" : `${kommuneEvent.kommune} kommune`

    return <div className="card my-2">
        <div className={`card-header ${cardStyles.blueHeader}`}>
            <div className={"d-flex justify-content-between"}>
                <h5>{kommuneEvent.name}</h5>
                <h5>{kommuneEvent.date.toLocaleString(DateTime.DATE_FULL)}</h5>
            </div>
        </div>
        <div className="card-body">
            <h6 className="card-subtitle mb-2">
                <div>
                    <div>{kommuneString}</div>
                </div>
                Sted: {kommuneEvent.place}
            </h6>
            <div className="card-text">
                {moreInfoLink && <button className={"btn btn-primary"}>Mere info</button>}
            </div>
        </div>
    </div>
};
