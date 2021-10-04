export interface Begivenhed {
    "Submitted On":              string;
    "Begivenhedens titel":       string;
    Dato:                        string;
    Tidspunkt:                   string;
    Adresse:                     string;
    Kommune:                     string;
    "Link til mere information": string;
    "Din email":                 string;
}

export interface Gruppe {
    "Submitted On":           string;
    "Gruppens navn":          string;
    "Beskrivelse af gruppen": string;
    Kontakt:                  string;
    Mdefrekvens:              string;
    Mdested:                  string;
}
