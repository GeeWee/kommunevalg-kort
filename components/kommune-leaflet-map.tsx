import { LatLngTuple } from 'leaflet';
import React, { FunctionComponent } from 'react';
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet-universal';
import kommunerGeoJSON from '../data/kommuner-geo.json';
import { GlobalEvent, KommuneName } from "../types";

/* Det her er broken i øjeblikket. Det viser sig der er en del problemer med at
   bruge Leaflet sammen med frameworks som Next.js, der kan finde på at lave
   server side rendering, uden at vi har direkte kontrol over det. Leaflet er
   bygget til kun at fungere på client-side, så koden har referenser til fx
   window lige fra starten. Det er en længere diskussion hvem der bør løse
   problemet, og dem der har lavet react-leaflet gider ikke.

   Diskussion og løsningsforslag: -
   https://github.com/PaulLeCam/react-leaflet/issues/45 -
   https://github.com/masotime/react-leaflet-universal -
   https://stackoverflow.com/questions/57704196/leaflet-with-next-js

   At bruge react-leaflet-universal i stedet for react-leaflet fikser fejlen,
   omend med den nyeste version af react-leaflet (v3) går
   react-leaflet-universal i stykker. Derfor skal vi have react-leaflet sat til
   ^2.8.0. Se Issue #28: -
   https://github.com/masotime/react-leaflet-universal/issues/28

   Man kan finde dens dokumentation her:
   https://react-leaflet-v2-docs.netlify.app/en/

   I det hele taget virker det til at react-leaflet-universal ikke er
   maintained. Den issue er mere end et år gammel...

   Man kunne også gå ind og kigge på at bruge @react-leaflet/universal-leaflet,
   men jeg kan ikke finde nogen dokumentation, om hvordan den præcis skal
   bruges.
 */

export interface KommuneLeafletMapProps {
    value : KommuneName | undefined,
    onChange : (commune: KommuneName | undefined) => void,
}

export const KommuneLeafletMap: FunctionComponent<KommuneLeafletMapProps> = (props) => {
    const centerCoordinateDenmark : LatLngTuple =  [56.26, 11.5];
    const zoomLevelDenmark : number = 7;
    const attributionText : string = '&copy; <a target="_blank" href="https://download.kortforsyningen.dk/content/vilk%C3%A5r-og-betingelser">Styrelsen for Dataforsyning og Effektivisering</a>';

    // TODO: where does the GeoJsonObject type come from?
    const communes : any = kommunerGeoJSON;
    console.log(communes);

    const styleFunction = (polygon : any) => {
       return { /* TODO */ };
    };

    return (
        <Map center={centerCoordinateDenmark} zoom={zoomLevelDenmark} scrollWheelZoom={false} style={{ height: "180px" }}>
            {/* TODO: add a style attribute here if we don't want the map to stay blue  */}
            <GeoJSON attribution={attributionText} data={communes} />
        </Map>
    )
}

export default KommuneLeafletMap;
