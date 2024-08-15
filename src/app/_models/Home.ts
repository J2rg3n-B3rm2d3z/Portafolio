export interface Homeinf {
    id: number;
    resume: string;
    img: string;
    featureproject: number;
    habilities: string[];
    lenguages: Lenguage[];
}

export interface Lenguage {
    id: number;
    name: string;
    img: string;
    habilities: string[];
}