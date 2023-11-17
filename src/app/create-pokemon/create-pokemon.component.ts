import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
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
