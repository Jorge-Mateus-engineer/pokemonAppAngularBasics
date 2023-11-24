import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css'],
})
export class PokemonFormComponent implements OnInit {
  //IMPORTANT: La propiedad con este decorador significa que puede recibir el valor de un parentComponent
  @Input() pokemonChild: Pokemon = new Pokemon();
  @Input() label: string = '';

  @Output() addItem = new EventEmitter<Pokemon>();

  ngOnInit(): void {}

  pushToFather() {
    this.addItem.emit(this.pokemonChild);
  }
}
