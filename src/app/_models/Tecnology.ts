//this is interface for technology page

export interface Tecnology {
    id: number;
    imagelink: string;
    imageresource: string;
    alt: string;
}
//this is interface for type of technology
export interface TypeTec {
    id: number;
    type1: string;
    type2: string;
    section1: Tecnology[];
    section2: Tecnology[];
}