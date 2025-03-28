import { Character } from "./entity";

export interface Location {
    name: string;
    url: string;
}   

export interface CharacterApiResponse {
    info: {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    };
    results: Character[];
}