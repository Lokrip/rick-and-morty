import { Location } from "@/entities/character/types";

export interface CardProps  {
    name: string;
    image: string;
    species: string;
    gender: string;
    status: string;
    location: Location
}