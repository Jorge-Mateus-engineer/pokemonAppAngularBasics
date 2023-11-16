import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css'],
})
export class CreatePokemonComponent {
  pokemon: Pokemon = new Pokemon();

  constructor(private pokemonService: PokemonService) {}

  saveInfo(): void {
    this.pokemonService.addPokemon(this.pokemon);
    //No se deben usar metodos del Document, es un anti patron
    // document.querySelectorAll('input').forEach((input) => {
    //   input.value = '';
    // });
    this.pokemon = new Pokemon();
  }
}
