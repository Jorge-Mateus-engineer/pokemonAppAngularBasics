import { Component, ViewEncapsulation } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';

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
  encapsulation: ViewEncapsulation.None,
})
export class CreatePokemonComponent {
  //Este se enviara al child que lo recibe en @Input
  pokemonParent: Pokemon = new Pokemon();
  parentLabel: string = 'Crear Pokemon';

  constructor(private pokemonService: PokemonService, private router: Router) {}

  saveInfo(): void {
    debugger;
    this.pokemonService.addPokemon(this.pokemonParent);
    //No se deben usar metodos del Document, es un anti patron
    // document.querySelectorAll('input').forEach((input) => {
    //   input.value = '';
    // });
    this.pokemonParent = new Pokemon();
    this.navigateTo('/listPokemons');
    localStorage.setItem('activeIndex', JSON.stringify({ index: 0 }));
  }

  private navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
