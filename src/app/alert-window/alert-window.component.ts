import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-alert-window',
  templateUrl: './alert-window.component.html',
  styleUrls: ['./alert-window.component.css'],
})
export class AlertWindowComponent {
  errorMessage: String = '';
  constructor(private pokemonService: PokemonService) {
    debugger;
    this.errorMessage = this.pokemonService.errorMessage;
  }
}
