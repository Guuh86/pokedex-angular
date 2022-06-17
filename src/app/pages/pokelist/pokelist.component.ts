import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})

export class PokelistComponent implements OnInit {

  pokemons: any[] = [];
  segmentValue: string = 'grid';

  constructor(
    private data: PokemonService
  ) { }

  ngOnInit(): void {
  }

  carregarLista() {
    this.data.getPokemonList().subscribe((response: any) => {
      response.results.forEach((a: any) => {
        this.data.getName(a.name)
          .subscribe((resp: any) => {
            this.pokemons.push(resp);
            console.log(resp);
          })
      })
    })
  }
}
