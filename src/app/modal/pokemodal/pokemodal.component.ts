import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemodal',
  templateUrl: './pokemodal.component.html',
  styleUrls: ['./pokemodal.component.css']
})
export class PokemodalComponent implements OnInit {

  @Output() pokemonName: any;

  constructor() { }

  ngOnInit(): void {
    
  }

}
