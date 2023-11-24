import { Component, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css'],
})
export class EditPokemonComponent {
  @Input() pokemonToEdit: Pokemon = new Pokemon();
  @Input() label: string = '';

  constructor(private _router: Router, private pokemonService: PokemonService) {
    pokemonService.updatePokemon(this.pokemonToEdit);
  }

  recievePokemon(pokemon: Pokemon) {
    this.pokemonService.updatePokemon(pokemon);
  }
}
