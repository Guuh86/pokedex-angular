import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  valuePokemon: any;

  constructor(private http: HttpClient) {
    
  }

  getPokemonList(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  }

  getName(name: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
