import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPokemonsComponent } from './list-pokemons/list-pokemons.component';
import { CreatePokemonComponent } from './create-pokemon/create-pokemon.component';
import { FormsModule } from '@angular/forms';
import { SharedTabsComponent } from './shared/shared-tabs/shared-tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertWindowComponent } from './alert-window/alert-window.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPokemonsComponent,
    CreatePokemonComponent,
    SharedTabsComponent,
    AlertWindowComponent,
    EditPokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
