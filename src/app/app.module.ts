import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { DresseurListComponent } from './components/dresseur-list/dresseur-list.component';
import { EchangeListComponent } from './components/echange-list/echange-list.component';
import { MaCollectionComponent } from './components/ma-collection/ma-collection.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonListComponent,
    DresseurListComponent,
    EchangeListComponent,
    MaCollectionComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    ],
  bootstrap: [AppComponent],

})
export class AppModule { }
