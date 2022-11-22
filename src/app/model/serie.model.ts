import { Genre } from "./genre.model";

export class Serie {
    idSerie? : number;
    nomSerie? : string;
    prixSerie? : number;
     dateCreation? : Date ;
     genre! : Genre;
    }
    