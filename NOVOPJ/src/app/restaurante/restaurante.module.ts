import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { routing } from '../app.routes';

import { RestauranteComponent } from './restaurante.component';
import { FiltroPorNomeRestaurante } from './lista/restaurante.lista.pipes';
import { RestauranteCadastroComponent } from './cadastro/restaurante.cadastro.component';
import { RestauranteAlterarComponent } from './alterar/restaurante.alterar.component';



@NgModule({
    imports: [BrowserModule, HttpModule, routing],
    declarations: [RestauranteComponent, FiltroPorNomeRestaurante, RestauranteCadastroComponent, RestauranteAlterarComponent],
  bootstrap: [ RestauranteComponent ]
})
export class RestauranteModule { }
