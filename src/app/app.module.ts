import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPokemonsComponent } from './list-pokemons/list-pokemons.component';
import { CreatePokemonComponent } from './create-pokemon/create-pokemon.component';
import { FormsModule } from '@angular/forms';
import { SharedTabsComponent } from './shared/shared-tabs/shared-tabs.component';

@NgModule({
  declarations: [AppComponent, ListPokemonsComponent, CreatePokemonComponent, SharedTabsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
