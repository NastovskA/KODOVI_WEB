
export interface Course {
    id:number;
    description:string;
    iconUrl: string;
    longDescription: string;
    category:string;
    lessonsCount:number;
}

export interface Artist {
    standings: number;
    name: string;
    iconUrl: string;
    song: string;
    label: string;
    year: number;
}
