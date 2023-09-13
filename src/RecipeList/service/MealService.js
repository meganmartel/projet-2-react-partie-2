import config from "../config";

class MealService {
    constructor() {}

    baseUrl = config.baseUrl;
    categories = "categories.php";
    filterCategory = "filter.php?c=";
    lookupMeal = "lookup.php?i=";

    async getAllCategories() {
        const res = await fetch(`${this.baseUrl}${this.categories}`);
        if (!res.ok) throw new Error("Failed to fetch categories");
        return await res.json();
    };

    async getRecipeList(category) {
        const res = await fetch(`${this.baseUrl}${this.filterCategory}${category}`);
        if (!res.ok) throw new Error("Failed to fetch recipe list");
        return await res.json();
    };

    async getRecipeDetails(id) {
        const res = await fetch(`${this.baseUrl}${this.lookupMeal}${id}`);
        if (!res.ok) throw new Error("Failed to fetch recipe details");
        return await res.json();
    };
}

export default MealService;