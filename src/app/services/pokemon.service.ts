import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor() {
    this.initDB();
  }

  private initDB(): void {
    if (this.getDB().length === 0) {
      this.saveList([
        { id: 1, name: 'Charmander', typeOfPokemon: 'Fuego', imgUrl: '' },
        { id: 2, name: 'Bulbasaur', typeOfPokemon: 'Hierba', imgUrl: '' },
        { id: 3, name: 'Pikachu', typeOfPokemon: 'Electricidad', imgUrl: '' },
        { id: 4, name: 'Mewtwo', typeOfPokemon: 'Psiquico', imgUrl: '' },
      ]);
    }
  }

  private saveList(arrayPokemon: Array<Pokemon>): void {
    localStorage.setItem('listArray', JSON.stringify(arrayPokemon));
  }

  private getDB(): Array<Pokemon> {
    let pokemonArrayString = localStorage.getItem('listArray');
    let pokemonArray: Array<Pokemon> = [];
    if (pokemonArrayString != null) {
      pokemonArray = JSON.parse(pokemonArrayString);
    }
    return pokemonArray;
  }

  getPokemonList(): Pokemon[] {
    return this.getDB();
  }

  addPokemon(pokemon: Pokemon): void {
    let currentPokemonArray = this.getDB();
    currentPokemonArray.push(pokemon);
    this.saveList(currentPokemonArray);
  }
}
