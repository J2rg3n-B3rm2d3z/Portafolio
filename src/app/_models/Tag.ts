export interface Tag{
    id: number;
    key: string;
    color: string;
    isActivated: boolean;
    type: string;
}

export interface TagHtml{
    id: number;
    type: string;
    tags: Tag[];
}