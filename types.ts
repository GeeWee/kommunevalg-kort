import {DateTime} from "luxon";

export type KommuneName = 'Albertslund' |
    'Allerød' |
    'Ballerup' |
    'Bornholm' |
    'Brøndby' |
    'Dragør' |
    'Egedal' |
    'Fredensborg' |
    'Frederiksberg' |
    'Frederikssund' |
    'Furesø' |
    'Gentofte' |
    'Gladsaxe' |
    'Glostrup' |
    'Gribskov' |
    'Halsnæs' |
    'Helsingør' |
    'Herlev' |
    'Hillerød' |
    'Hvidovre' |
    'Høje-Taastrup' |
    'Hørsholm' |
    'Ishøj' |
    'København' |
    'Lyngby-Taarbæk' |
    'Rudersdal' |
    'Rødovre' |
    'Tårnby' |
    'Vallensbæk' |
    'Favrskov' |
    'Hedensted' |
    'Herning' |
    'Holstebro' |
    'Horsens' |
    'Ikast-Brande' |
    'Lemvig' |
    'Norddjurs' |
    'Odder' |
    'Randers' |
    'Ringkøbing-Skjern' |
    'Samsø' |
    'Silkeborg' |
    'Skanderborg' |
    'Skive' |
    'Struer' |
    'Syddjurs' |
    'Viborg' |
    'Aarhus' |
    'Brønderslev' |
    'Frederikshavn' |
    'Hjørring' |
    'Jammerbugt' |
    'Læsø' |
    'Mariagerfjord' |
    'Morsø' |
    'Rebild' |
    'Thisted' |
    'Vesthimmerland' |
    'Aalborg' |
    'Faxe' |
    'Greve' |
    'Guldborgsund' |
    'Holbæk' |
    'Kalundborg' |
    'Køge' |
    'Lejre' |
    'Lolland' |
    'Næstved' |
    'Odsherred' |
    'Ringsted' |
    'Roskilde' |
    'Slagelse' |
    'Solrød' |
    'Sorø' |
    'Stevns' |
    'Vordingborg' |
    'Assens' |
    'Billund' |
    'Esbjerg' |
    'Fanø' |
    'Fredericia' |
    'Faaborg-Midtfyn' |
    'Haderslev' |
    'Kerteminde' |
    'Kolding' |
    'Langeland' |
    'Middelfart' |
    'Nordfyn' |
    'Nyborg' |
    'Odense' |
    'Svendborg' |
    'Sønderborg' |
    'Tønder' |
    'Varde' |
    'Vejen' |
    'Vejle' |
    'Ærø' |
    'Aabenraa';

export type GlobalEvent = "Landsdækkende";


export interface KommuneEvent {
    date: DateTime,
    time: string,
    name: string,
    kommune: KommuneName | GlobalEvent,
    place: string,
    moreInfoLink: string,
}

export interface KommuneEventFromServer {
    date: string,
    time: string,
    name: string,
    kommune: KommuneName | GlobalEvent,
    place: string,
    moreInfoLink: string,
}

export interface KommuneGroup {
    person: string,
    groupName: string,
    kommune: KommuneName,
    description: string,
    meetings: string,
    location: string
}
