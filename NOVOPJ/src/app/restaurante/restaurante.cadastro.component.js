"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var restaurante_component_1 = require("../restaurante.component");
var RestauranteCadastroComponent = (function () {
    function RestauranteCadastroComponent(http) {
        this.restaurante = new restaurante_component_1.RestauranteComponent();
        this.http = http;
    }
    RestauranteCadastroComponent.prototype.cadastrar = function () {
        console.log(this.restaurante);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append('id_restaurante', this.restaurante.id);
        urlSearchParams.append('nome_restaurante', this.restaurante.nome);
        var body = urlSearchParams.toString();
        this.http.post('http://localhost:50411/api/Restaurante/', body, { headers: headers })
            .subscribe(function () {
            console.log('Restaurante cadastrado via WEBAPI.');
        });
        /* headers.append('Content-Type', 'application/json');
 
         this.http.post('http://localhost:50411/api/Restaurante/', JSON.stringify(this.restaurante), { headers: headers })
             .subscribe(() => {
                 console.log('Restaurante cadastrado via WEBAPI.');
             });*/
    };
    return RestauranteCadastroComponent;
}());
RestauranteCadastroComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cadastro',
        templateUrl: './restaurante.cadastro.component.html',
    }),
    __metadata("design:paramtypes", [http_1.Http])
], RestauranteCadastroComponent);
exports.RestauranteCadastroComponent = RestauranteCadastroComponent;
//# sourceMappingURL=restaurante.cadastro.component.js.map