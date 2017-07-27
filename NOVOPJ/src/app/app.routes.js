"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var restaurante_lista_component_1 = require("./restaurante/lista/restaurante.lista.component");
var restaurante_cadastro_component_1 = require("./restaurante/cadastro/restaurante.cadastro.component");
var restaurante_alterar_component_1 = require("./restaurante/alterar/restaurante.alterar.component");
var prato_lista_component_1 = require("./prato/lista/prato.lista.component");
var prato_cadastro_component_1 = require("./prato/cadastro/prato.cadastro.component");
var prato_alterar_component_1 = require("./prato/alterar/prato.alterar.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'restaurante', component: restaurante_lista_component_1.RestauranteListaComponent },
    { path: 'restaurante/cadastro', component: restaurante_cadastro_component_1.RestauranteCadastroComponent },
    { path: 'restaurante/alterar/:id', component: restaurante_alterar_component_1.RestauranteAlterarComponent },
    { path: 'prato', component: prato_lista_component_1.PratoListaComponent },
    { path: 'prato/cadastro', component: prato_cadastro_component_1.PratoCadastroComponent },
    { path: 'prato/alterar/:id', component: prato_alterar_component_1.PratoAlterarComponent },
    { path: '**', component: home_component_1.HomeComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map