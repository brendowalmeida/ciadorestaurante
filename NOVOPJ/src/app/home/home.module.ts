import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { routing } from '../app.routes';

import { HomeComponent } from '../home/home.component';

@NgModule({
    imports: [BrowserModule, HttpModule, routing],
    declarations: [HomeComponent],
    bootstrap: [HomeComponent]
})
export class HomeModule { }