import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{

    private recipes: Recipe[] = [
        new Recipe(
            'HotDog', 
            'Super tasty long hotdog', 
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F171027052520-processed-foods-super-tease.jpg&f=1&nofb=1',
            [
                new Ingredient('Sausage', 1), 
                new Ingredient('Bun', 1),
                new Ingredient('Frech Fries serving', 1)
            ]),
        new Recipe(
            'Taco', 
            'Huge chicken taco', 
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sickchirpse.com%2Fwp-content%2Fuploads%2F2016%2F06%2FBurrito-1.jpg&f=1&nofb=1', 
            [
                new Ingredient('Flour Tortilla' ,2),
                new Ingredient('Chicken', 5),
                new Ingredient('Cheese', 1)
            ])
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}