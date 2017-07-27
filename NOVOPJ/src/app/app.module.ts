import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { FiltroPorNomeRestaurante } from './restaurante/lista/restaurante.lista.pipes';
import { RestauranteCadastroComponent } from './restaurante/cadastro/restaurante.cadastro.component';
import { RestauranteAlterarComponent } from './restaurante/alterar/restaurante.alterar.component';
import { RestauranteListaComponent } from './restaurante/lista/restaurante.lista.component';
import { PratoComponent } from './prato/prato.component';
import { PratoListaComponent } from './prato/lista/prato.lista.component';
import { FiltroPorNomePrato } from './prato/lista/prato.lista.pipes';
import { PratoCadastroComponent } from './prato/cadastro/prato.cadastro.component';
import { PratoAlterarComponent } from './prato/alterar/prato.alterar.component';

@NgModule({
    imports: [BrowserModule, HttpModule, routing, FormsModule ],
    declarations: [AppComponent, HomeComponent, RestauranteComponent, RestauranteListaComponent, FiltroPorNomeRestaurante, RestauranteCadastroComponent, RestauranteAlterarComponent, PratoComponent,
        PratoListaComponent, FiltroPorNomePrato, PratoCadastroComponent, PratoAlterarComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
