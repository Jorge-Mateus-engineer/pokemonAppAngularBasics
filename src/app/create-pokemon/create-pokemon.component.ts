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

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log(event);
    this.pokemonService.addPokemon(this.pokemon);
  }
}
