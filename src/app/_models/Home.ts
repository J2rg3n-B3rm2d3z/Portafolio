//information interface to home
export interface Homeinf {
    id: number;
    resume: string;
    img: string;
    featureproject: number;
    habilities: string[];
    lenguages: Lenguage[];
    curriculum: string;
}
//information interface to Lenguage
export interface Lenguage {
    id: number;
    name: string;
    img: string;
    habilities: string[];
}