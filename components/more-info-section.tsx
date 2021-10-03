import React, {FunctionComponent} from 'react';
import {convertLinkToFullFledged} from "../utils/link-validation-utils";
import _ from "lodash";
import Linkify from 'react-linkify';

export interface MoreInfoSectionProps {
    moreInfoLink?: string;
}

export const MoreInfoSection: FunctionComponent<MoreInfoSectionProps> = ({moreInfoLink}) => {
    if (!moreInfoLink) {
        return <>Mere information kommer snart.</>
    }

    const capitalized = _.capitalize(moreInfoLink);

    if (moreInfoLink.split(" ").length === 1){
        if (moreInfoLink.startsWith("www") || moreInfoLink.startsWith("http")){
            return <a className={""} target="_top" href={moreInfoLink}>
                {moreInfoLink.includes("facebook.com") ? "Mere info på Facebook" : "Mere info på hjemmesiden"}
            </a>
        }
    }

    return (
        <Linkify>
            {capitalized}
        </Linkify>
    )
};
