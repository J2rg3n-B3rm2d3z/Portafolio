import { Tag } from "./Tag";

//This interface is a project's format.

export interface Project {
    id: number;
    name: string;
    summary: string;
    description: string;
    projectlink: string;
    pictures: string[];
    tags: Tag[];
}