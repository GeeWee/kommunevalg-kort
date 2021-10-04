import _ from 'lodash';
import {DateTime, Duration} from 'luxon';
import {FunctionComponent} from 'react';
import {KommuneEvent, KommuneGroup} from "../types";
import tableStyles from "../styles/table.module.scss";
import {convertLinkToFullFledged} from "../utils/link-validation-utils";
import {useWindowSize} from "@react-hook/window-size";
import {SMALL_SCREEN_BREAKPOINT} from "../utils/constants";
import cardStyles from "../styles/cards.module.scss";
import {SignUpLink} from "./sign-up-link";
import React from 'react';
import Linkify from "react-linkify";

export interface KommuneGroupList {
    groups: KommuneGroup[]
}

export const KommuneGroupList: FunctionComponent<KommuneGroupList> = (props) => {
    const [width, height] = useWindowSize()

    // Empty state for groups
    if (props.groups.length === 0) {
        return <div>
            Vi har pt. ikke information om nogle lokale grupper i din kommune.
            Hvis du er med i en gruppe som ikke står her, eller du gerne vil være med til at starte en gruppe så kan
            du <SignUpLink>tilmelde dig Klimabevægelsens Kampagnehold.</SignUpLink>
        </div>
    }
    return renderCards(props.groups);
};


function renderCards(groups: KommuneGroup[]) {
    const cards = groups.map((group, index) => {

        return <div key={index} className="card my-2">
            <div className={`card-header ${cardStyles.greenHeader}`}>
                <h5 className="card-title">{group.groupName}</h5>
            </div>
            <div className="card-body">
                <div className={"d-flex justify-content-between card-subtitle"}>
                    <div>
                        <span className={"fw-bold"}>
                        Mødes:
                        </span>
                        {" "}
                        <span>
                        {_.capitalize(group.meetings)}
                    </span>
                    </div>

                    <div>
                        <span className={"fw-bold"}>
                        Sted:
                        </span>
                        {" "}
                        <span>
                        {_.capitalize(group.location)}
                    </span>
                    </div>
                </div>
                <div className="card-text">
                    <div className={"my-2 pre-wrap"}>{group.description}</div>
                    <div className={"fw-bolder"}>Kontakt:</div>
                    <Linkify>
                        {group.person}
                    </Linkify>
                </div>
            </div>
        </div>
    })

    return <div>
        {cards}
    </div>
}
