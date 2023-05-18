import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

const recipe1 = new Recipe(
  'A Test Recipe',
  'This is simply a test',
  'https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-2-1200.jpg'
);

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [];

  constructor() {}

  ngOnInit(): void {
    this.onRecipeAdded(recipe1)
    this.onRecipeAdded(recipe1)
  }

  onRecipeAdded(recipe: Recipe) {
    this.recipes.push(recipe);
  }
}
