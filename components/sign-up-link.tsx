import {FunctionComponent} from 'react';

export interface SignUpLinkProps {

}

export const SignUpLink: React.FC<SignUpLinkProps> = (props) => {

        // TODO for some reason this doesn't work properly on all links
        // // If we're in an iframe, we scroll to the top of our parent
        // if (inIframe()) {
        //     console.log('INSIDE IFRAME??');
        //     const onClick = () => {
        //         window.parent.postMessage("scrollToTop", "http://localhost:63342/");
        //     }
        //
        //     return (
        //         <a href="javascript:;" onClick={onClick}>
        //             {props.children}
        //         </a>
        //     )
        //
        // }
        return (
            <a href="https://www.klimabevaegelsen.dk/kommunalvalg" target="_top">
                {props.children}
            </a>
        )


    }
;

//https://stackoverflow.com/questions/326069/how-to-identify-if-a-webpage-is-being-loaded-inside-an-iframe-or-directly-into-t
function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}
