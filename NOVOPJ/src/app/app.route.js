"use strict";
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var restaurante_component_1 = require("../restaurante/restaurante.component");
var appRoutes = [
    { path: '', component: app_component_1.AppComponent },
    { path: 'restaurante', component: restaurante_component_1.RestauranteComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.route.js.map