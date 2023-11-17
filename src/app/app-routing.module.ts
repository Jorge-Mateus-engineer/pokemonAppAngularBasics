import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonsComponent } from './list-pokemons/list-pokemons.component';
import { CreatePokemonComponent } from './create-pokemon/create-pokemon.component';

const routes: Routes = [
  {
    path: 'listPokemons',
    component: ListPokemonsComponent,
    data: { animation: 'isRight' },
  },
  {
    path: 'addPokemons',
    component: CreatePokemonComponent,
    data: { animation: 'isLeft' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
