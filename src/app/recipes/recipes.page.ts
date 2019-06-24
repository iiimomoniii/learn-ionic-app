import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {

  recipes: Recipe[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ionViewWillEnter(){
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewDidEnter(){

  }

  ionViewWillLeave(){

  }

  ionViewViewEnter(){
    
  }

  ngOnDestroy(){

  }

}
