import React, {FunctionComponent} from 'react';
import {convertLinkToFullFledged} from "../utils/link-validation-utils";
import cardStyles from "../styles/cards.module.scss";
import {KommuneEvent} from "../types";
import {DateTime} from "luxon";
import _ from "lodash";
import classNames from "classnames";

export interface KommuneEventCardProps {
    kommuneEvent: KommuneEvent,
    differentColors?: boolean
}

export const KommuneEventCard: FunctionComponent<KommuneEventCardProps> = ({kommuneEvent, differentColors= true}) => {
    let moreInfoLink = null;
    if (kommuneEvent.moreInfoLink) {
        moreInfoLink =
            <a href={convertLinkToFullFledged(kommuneEvent.moreInfoLink)} target="_top">{kommuneEvent.moreInfoLink}</a>
    }
    const isGlobal = kommuneEvent.kommune === "Landsdækkende";
    const kommuneString = isGlobal ? "Landsdækkende begivenhed" : `${kommuneEvent.kommune} kommune`

    let headerClasses = differentColors ? classNames({
        [cardStyles.blueHeader]: !isGlobal,
        [cardStyles.fadedBlueHeader]: isGlobal
    }): cardStyles.fadedBlueHeader;

    return <div className="card my-2">
        <div className={`card-header ${headerClasses}`}>
            <div className={"d-flex justify-content-between"}>
                <h5>{kommuneEvent.name}</h5>
                <h5 className={"fw-normal"}>{_.capitalize(kommuneEvent.date.setLocale("da-dk").toLocaleString(DateTime.DATE_HUGE))}</h5>
            </div>
        </div>
        <div className="card-body">


            <div className="card-subtitle mb-2">
                <div className={"d-flex justify-content-between card-subtitle"}>
                    <div>
                        <span>
                        {kommuneString}
                    </span>
                    </div>

                    <div>
                        <span className={"fw-bold"}>
                        Sted:
                        </span>
                        {" "}
                        <span>
                        {_.capitalize(kommuneEvent.place)}
                    </span>
                    </div>
                </div>

            </div>
            <div className="card-text">
                {moreInfoLink && <button className={"btn btn-primary"}>Mere info</button>}
            </div>
        </div>
    </div>
};
