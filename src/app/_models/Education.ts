// this is a interface for the education format
export interface Education {
    id: number;
    header: string;
    body: string;
    imagelink: string;
    imageresource: string;
    alt: string;
}
// this is a interface for the section of education in the page
export interface Phase_education {
    id: number;
    phase: string;
    education: Education[];
}