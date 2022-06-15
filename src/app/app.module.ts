import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeindexComponent } from './pages/pokeindex/pokeindex.component';
import { PokelistComponent } from './pages/pokelist/pokelist.component';
import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './pages/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { PokemodalComponent } from './modal/pokemodal/pokemodal.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeindexComponent,
    PokelistComponent,
    ListComponent,
    PokemodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
