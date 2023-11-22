import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.css'],
})
export class ListPokemonsComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  pokemonEdit: Pokemon | null = null;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonList = this.pokemonService.getPokemonList();
  }

  editPokemon(pokemonEdit: Pokemon) {
    this.pokemonEdit = pokemonEdit;
  }
}
