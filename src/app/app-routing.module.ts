import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeindexComponent } from './pages/pokeindex/pokeindex.component';
import { PokelistComponent } from './pages/pokelist/pokelist.component';

const routes: Routes = [
  {path: '', component: PokeindexComponent},
  {path: 'pokelist', component: PokelistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
