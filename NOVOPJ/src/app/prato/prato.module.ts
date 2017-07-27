import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { routing } from '../app.routes';

import { PratoComponent } from './prato.component';
import { FiltroPorNomePrato } from './lista/prato.lista.pipes';

@NgModule({
    imports: [BrowserModule, HttpModule, routing],
    declarations: [PratoComponent, FiltroPorNomePrato],
    bootstrap: [PratoComponent]
})
export class PratoModule { }
