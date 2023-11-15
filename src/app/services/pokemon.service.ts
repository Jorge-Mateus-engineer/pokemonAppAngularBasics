import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private pokemonList: Pokemon[] = [];

  constructor() {
    this.pokemonList = [
      { id: 1, name: 'Charmander', typeOfPokemon: 'Fuego', imgUrl: '' },
      { id: 2, name: 'Bulbasaur', typeOfPokemon: 'Hierba', imgUrl: '' },
      { id: 3, name: 'Pikachu', typeOfPokemon: 'Electricidad', imgUrl: '' },
      { id: 4, name: 'Mewtwo', typeOfPokemon: 'Psiquico', imgUrl: '' },
    ];
  }

  getPokemonList(): Pokemon[] {
    return this.pokemonList;
  }

  addPokemon(pokemon: Pokemon): void {
    this.pokemonList.push(pokemon);
  }
}
