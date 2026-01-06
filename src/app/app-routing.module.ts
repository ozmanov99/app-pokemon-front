import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { DresseurListComponent } from './components/dresseur-list/dresseur-list.component';
import { DresseurFormComponent } from './components/dresseur-form/dresseur-form.component';
import { EchangeListComponent } from './components/echange-list/echange-list.component';
import { MaCollectionComponent } from './components/ma-collection/ma-collection.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'dresseurs', component: DresseurListComponent },
  { path: 'dresseur/form/:id', component: DresseurFormComponent },
  { path: 'echanges', component: EchangeListComponent },
  { path: 'collection', component: MaCollectionComponent },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
