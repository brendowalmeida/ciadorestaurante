"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_routes_1 = require("./app.routes");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/map");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var restaurante_component_1 = require("./restaurante/restaurante.component");
var restaurante_lista_pipes_1 = require("./restaurante/lista/restaurante.lista.pipes");
var restaurante_cadastro_component_1 = require("./restaurante/cadastro/restaurante.cadastro.component");
var restaurante_alterar_component_1 = require("./restaurante/alterar/restaurante.alterar.component");
var restaurante_lista_component_1 = require("./restaurante/lista/restaurante.lista.component");
var prato_component_1 = require("./prato/prato.component");
var prato_lista_component_1 = require("./prato/lista/prato.lista.component");
var prato_lista_pipes_1 = require("./prato/lista/prato.lista.pipes");
var prato_cadastro_component_1 = require("./prato/cadastro/prato.cadastro.component");
var prato_alterar_component_1 = require("./prato/alterar/prato.alterar.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routes_1.routing, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, restaurante_component_1.RestauranteComponent, restaurante_lista_component_1.RestauranteListaComponent, restaurante_lista_pipes_1.FiltroPorNomeRestaurante, restaurante_cadastro_component_1.RestauranteCadastroComponent, restaurante_alterar_component_1.RestauranteAlterarComponent, prato_component_1.PratoComponent,
            prato_lista_component_1.PratoListaComponent, prato_lista_pipes_1.FiltroPorNomePrato, prato_cadastro_component_1.PratoCadastroComponent, prato_alterar_component_1.PratoAlterarComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map