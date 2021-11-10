import { Component } from '@angular/core';
import { ApipokedexService } from './services/apipokedex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pokeapi';
  pokemon:any;
  image:string='';
  ngOnInit() {}

  constructor(private pokedex: ApipokedexService) {}

  search_pokemon(name_poke: string) {
    this.pokedex.getpokemon(name_poke).subscribe(
      (res:any) => {
        console.log(res),
        this.pokemon=res,
        this.image= res.sprites.other.dream_world.front_default;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  submit(name: HTMLInputElement) {
    if (name.value) {
      this.search_pokemon(name.value);
      /* console.log(name.value); */
      name.value = '';
    } else {
      alert('Ingresa los datos');
    }
    name.focus();
    return false;
  }
}
