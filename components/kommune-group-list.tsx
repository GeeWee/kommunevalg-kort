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

export interface KommuneGroupList {
    groups: KommuneGroup[]
}

export const KommuneGroupList: FunctionComponent<KommuneGroupList> = (props) => {
    const [width, height] = useWindowSize()

    // Empty state for groups
    if (props.groups.length === 0){
        return <div>
            Vi har pt. ikke information om nogle lokale grupper i din kommune.
            Hvis du er med i en gruppe som ikke står her, eller du gerne vil være med til at starte en gruppe så kan du <SignUpLink>tilmelde dig Klimabevægelsens Kampagnehold.</SignUpLink>
        </div>
    }
    return renderCards(props.groups);
};


function renderCards(groups: KommuneGroup[]) {
    const cards = groups.map((group, index) => {

        return <div key={index} className="card my-2">
            <div className={`card-header ${cardStyles.blueHeader}`}>
                <h5 className="card-title">{group.groupName}</h5>
            </div>
            <div className="card-body">
                <h6 className="card-subtitle mb-2">
                    Mødes: {group.meetings}<br/>
                    Lokation: {group.location}

                </h6>
                <div className="card-text">
                    <p>
                    {group.description}
                    </p>
                    <div className={"fw-bolder"}>Kontaktperson:</div>
                    <MailToParagraph text={group.person}/>
                </div>
            </div>
        </div>
    })

    return <div>
        {cards}
    </div>
}


// Automatically converts mails in text to mailto links
export const MailToParagraph: FunctionComponent<{text: string}> = (props) => {
    const words = props.text.split(" ");

    // This is horrible
    const wordsWithEmailsAsLinks = words.map(word => {
        if (isEmail(word)){
            return <><a href={`mailto:${word}`}>{word}</a> {" "}</>
        }
        return <span>{word} </span>;
    });


    return (
        <>
            {wordsWithEmailsAsLinks}
        </>
    )
};

function isEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
