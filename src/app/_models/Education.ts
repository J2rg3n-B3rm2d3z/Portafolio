export interface Education {
    id: number;
    header: string;
    body: string;
    imagelink: string;
    imageresource: string;
    alt: string;
}

export interface Phase_education {
    id: number;
    phase: string;
    education: Education[];
}