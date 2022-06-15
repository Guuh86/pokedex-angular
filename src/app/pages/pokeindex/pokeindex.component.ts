import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { PokemodalComponent } from 'src/app/modal/pokemodal/pokemodal.component';

@Component({
  selector: 'app-pokeindex',
  templateUrl: './pokeindex.component.html',
  styleUrls: ['./pokeindex.component.css']
})
export class PokeindexComponent implements OnInit {

  pokemonName: string = '';
  pokemon: any[] = [];

  isLoading: boolean = true;

  constructor(
    private data: PokemonService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  getPokemonWithName() {
    this.isLoading = false;
     this.data.getName(this.pokemonName)
      .subscribe((resp: any) => {
        this.pokemon.push(resp);
        console.log(resp);
        this.pokemonName =  '';
      }, err => {
        this.isLoading = true;
        console.log(err);
        window.alert('O Pokémon digitado não foi encontrado :( Por favor, verifique o termo digitado e tente novamente!');
      })
  }
}

