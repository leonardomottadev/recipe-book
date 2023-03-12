import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Pasta alla Gricia with Maine Lobster',
        'Pasta alla Gricia with Maine Lobster',
        'https://lobsterfrommaine.com/wp-content/uploads/fly-images/1577/20210517-Pasta-alla-Gricia-with-Lobster3010-2048x576-c.jpg',
        [
            new Ingredient('Maine Lobster Tail Meat',1),
            new Ingredient('Fresh Ground Black Pepper',2),
            new Ingredient('Pecorino Romano',1),
            new Ingredient('Flakey Sea Salt',1),
            new Ingredient('Kosher Salt',1),
            new Ingredient('Extra-Virgin Olive Oil',1),
            new Ingredient('Guanciale',1),
            new Ingredient('Rigatoni',1)
        ]
        ),
        new Recipe('Quiche ',
        'Quiche',
        'https://live.staticflickr.com/5578/14668945171_b3e6dc67ac_b.jpg',
        [
            new Ingredient('Pie Crust',1),
            new Ingredient('Heavy Cream',1),
            new Ingredient('Milk',1),
            new Ingredient('Eggs',4),
            new Ingredient('Pepper',1)
        ]
        ),
    ];

    constructor(private shoppinglistService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice(); // slice: return array copy
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppinglistService.addIngredients(ingredients);
    }

}