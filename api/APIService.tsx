import axios from "axios";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export interface Beverage {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strCategory?: string;
    strAlcoholic?: string;
    strGlass?: string;
    strInstructions?: string;
}

// Fetch multiple categories
export const fetchMultipleBeverages = async (): Promise<Beverage[]> => {
    const queries = ["coffee", "tea", "juice", "cocktail", "soda"];
    try {
        const requests = queries.map((query) => axios.get<{ drinks: Beverage[] | null }>(`${BASE_URL}${query}`));
        const responses = await Promise.all(requests);

        // Merge all drink lists and remove duplicates
        const allDrinks = responses.flatMap(response => response.data.drinks || []);
        const uniqueDrinks = Array.from(new Map(allDrinks.map(drink => [drink.idDrink, drink])).values());

        return uniqueDrinks;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};
