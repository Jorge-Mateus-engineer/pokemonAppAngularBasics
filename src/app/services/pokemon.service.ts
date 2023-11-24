import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  errorMessage: String = '';

  constructor() {
    this.initDB();
  }

  initDB(): void {
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

  validatePokemon(pokemon: Pokemon): string[] {
    const errores: string[] = [];
    //1.Validar que no haya campos vacios
    if (!pokemon.id || pokemon.id == 0) {
      errores.push('Ingresa un ID, "0" no es un ID valido.');
    }
    if (pokemon.name === '') {
      errores.push('¡Ingresa el nombre de tu Pókemon!');
    }
    if (pokemon.typeOfPokemon === '') {
      errores.push('¡Ingresa el tipo de tu Pókemon!');
    }
    //2. Validar que el Id y nombre no existan
    let currentPokemonArray = this.getDB();
    const validationID = currentPokemonArray.some((p) => p.id === pokemon.id);
    if (validationID) {
      errores.push(`El ID ${pokemon.id} ya esta en uso, ingresa uno distinto`);
    }
    const validationName = currentPokemonArray.some(
      (p) => p.name.toLowerCase() === pokemon.name.toLowerCase()
    );
    if (validationName) {
      errores.push(`El Pokemon ${pokemon.name} ya está registrado.`);
    }
    return errores;
  }

  getPokemonList(): Pokemon[] {
    return this.getDB();
  }

  addPokemon(pokemon: Pokemon): string[] {
    let currentPokemonArray = this.getDB();
    if (this.validatePokemon(pokemon).length === 0) {
      currentPokemonArray.push(pokemon);
      this.saveList(currentPokemonArray);
      return [];
    }
    return this.validatePokemon(pokemon);
  }

  updatePokemon(pokemonToUpdate: Pokemon): void {
    let currentPokemonArray = this.getDB();
    debugger;
    currentPokemonArray.forEach((p, index) => {
      if (p.id === pokemonToUpdate.id) {
        currentPokemonArray[index] = pokemonToUpdate;
        this.saveList(currentPokemonArray);
      }
    });
  }
}
