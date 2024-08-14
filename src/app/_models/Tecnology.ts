export interface Tecnology {
    id: number;
    imagelink: string;
    imageresource: string;
    alt: string;
}

export interface TypeTec {
    id: number;
    type1: string;
    type2: string;
    section1: Tecnology[];
    section2: Tecnology[];
}