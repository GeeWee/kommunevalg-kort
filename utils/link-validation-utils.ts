/**
 * When people write links in google sheets they probably don't write a full link with the protocol and we need that
 * @param originalLink
 */
export function convertLinkToFullFledged(originalLink: string){
    // Assuming that anything that returns with http as a protocol is a full url
    if (originalLink.startsWith("http")){
        return originalLink;
    } else {
        return `http://${originalLink}`; // http here as it might not be a https enabled site and we'd expect them to upgrade protocol
    }
}
