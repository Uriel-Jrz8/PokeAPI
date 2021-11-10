import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApipokedexService {
  API ='https://pokeapi.co/api/v2/pokemon';
  URI='';

  constructor(private http:HttpClient) {
    this.URI = `${this.API}`;
   }

   getpokemon(name_pokemon:string){
return this.http.get(`${this.URI}/${name_pokemon}`);
   }
}
