import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
    'This is simply a test',
    'https://lobsterfrommaine.com/wp-content/uploads/fly-images/1577/20210517-Pasta-alla-Gricia-with-Lobster3010-2048x576-c.jpg'
    ),
    new Recipe('A Test Recipe 2 ',
    'This is simply a test',
    'https://live.staticflickr.com/5578/14668945171_b3e6dc67ac_b.jpg'
    ),
    
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
