import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; // <-- ajouté

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { DresseurListComponent } from './components/dresseur-list/dresseur-list.component';
import { DresseurFormComponent } from './components/dresseur-form/dresseur-form.component';
import { EchangeListComponent } from './components/echange-list/echange-list.component';
import { MaCollectionComponent } from './components/ma-collection/ma-collection.component'; // <-- corrigé

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonListComponent,
    DresseurListComponent,
    DresseurFormComponent,
    EchangeListComponent,
    MaCollectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
