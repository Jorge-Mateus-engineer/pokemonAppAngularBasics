import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './route-animations';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fader],
})
export class AppComponent {
  title: string = 'my-app';
  pokemonService = new PokemonService();

  // @HostListener('window:beforeunload', ['$event'])
  // unloadNotification($event: any): void {
  //   // Perform actions on application unload
  //   console.log($event);
  //   // localStorage.setItem('activeIndex', JSON.stringify({ index: 0 }));
  //   this.pokemonService.initDB();
  // }

  prepareOutlet(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
