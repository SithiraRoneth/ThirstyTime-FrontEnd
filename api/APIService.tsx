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
    const queries = [
        "coffee", "tea", "juice", "cocktail", "soda",
        "water", "smoothie", "milkshake", "lemonade",
        "hot chocolate", "latte", "espresso", "mocha",
        "iced tea", "iced coffee", "frappuccino", "wine",
        "beer", "whiskey", "rum", "vodka", "champagne",
        "margarita", "pina colada", "gin", "sangria",
        "martini", "mojito", "long island iced tea", "apple cider",
        "milk", "kombucha", "iced latte", "green tea", "matcha",
        "protein shake", "yogurt drink", "coconut water", "energy drink"
    ];

    try {
        const requests = queries.map((query) => axios.get<{ drinks: Beverage[] | null }>(`${BASE_URL}${query}`));
        const responses = await Promise.all(requests);

        const allDrinks = responses.flatMap(response => response.data.drinks || []);
        const uniqueDrinks = Array.from(new Map(allDrinks.map(drink => [drink.idDrink, drink])).values());

        return uniqueDrinks;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};
