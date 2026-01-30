import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { DresseurListComponent } from './components/dresseur-list/dresseur-list.component';
import { EchangeListComponent } from './components/echange-list/echange-list.component';
import { MaCollectionComponent } from './components/ma-collection/ma-collection.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pokemons', component: PokemonListComponent, canActivate: [AuthGuard] },
  { path: 'dresseurs', component: DresseurListComponent, canActivate: [AuthGuard] },
  { path: 'echanges', component: EchangeListComponent, canActivate: [AuthGuard] },
  { path: 'collection', component: MaCollectionComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
