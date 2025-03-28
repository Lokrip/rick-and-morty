import { axios } from "@/config/axios";
import { CharacterApiResponse } from "./types";

export async function getListCustomers(searchQuery?: string): Promise<CharacterApiResponse> {
    "use server";
    try {
        let url = "/api/character"

        const params = [];

        if(searchQuery) 
            params.push(`name=${searchQuery}`);

        if (params.length > 0)
            url += `?${params.join("&")}`;
        console.log(url)
        const data = await axios.get<CharacterApiResponse>(url);
        return data;
    } catch (error) {
        console.error(error)
        throw error
    }
}