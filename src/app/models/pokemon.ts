export class Pokemon {
  id: number | undefined;
  name: string;
  typeOfPokemon: string;
  imgUrl: string;

  constructor() {
    this.name = '';
    this.typeOfPokemon = '';
    this.imgUrl = '';
  }
}
