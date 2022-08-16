import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-add-pokemon',
  template: `<h2 class="center">Ajouter Un Nouveau Pokemon</h2>
             <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `
})
export class AddPokemonComponent implements OnInit {

  constructor() { }
  pokemon:Pokemon;
  ngOnInit() {
    this.pokemon = new Pokemon();
  }
}