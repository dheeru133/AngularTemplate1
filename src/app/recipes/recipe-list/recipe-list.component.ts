/*
 * Created on Sat Mar 30 2019
 *
 * Copyright (c) 2019 Your Company
 */

import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      ' A Tests Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Handi-chicken-recipe.jpg/800px-Handi-chicken-recipe.jpg'
    ),
    new Recipe(
      ' A Tests Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Handi-chicken-recipe.jpg/800px-Handi-chicken-recipe.jpg'
    ),
    new Recipe(
      ' A Tests Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Handi-chicken-recipe.jpg/800px-Handi-chicken-recipe.jpg'
    )
  ];
  constructor() {}

  ngOnInit() {}
}
