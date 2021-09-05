export interface Begivenhed {
    Dato       : string,
    Tidspunkt  : string,
    Begivenhed : string,
    Kommune    : string,
    Sted       : string,
    Info       : string,
    Link       : string
}

export interface Gruppe {
    Kommune : string,
    Gruppenavn : string,
    Kontaktperson : string,
    Beskrivelse : string,
    Møder : string,
    Lokation : string
}
