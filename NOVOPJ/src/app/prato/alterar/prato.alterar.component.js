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
var router_1 = require("@angular/router");
var prato_component_1 = require("../prato.component");
var PratoAlterarComponent = (function () {
    function PratoAlterarComponent(rota, http) {
        var _this = this;
        this.rota = rota;
        this.restaurantes = [];
        this.prato = new prato_component_1.PratoComponent();
        this.mensagem = '';
        this.http = http;
        this.id = rota.snapshot.params['id'];
        this.http.get('http://localhost:50411/api/Prato/' + this.id)
            .map(function (res) { return res.json(); })
            .subscribe(function (pratos) {
            _this.prato = pratos;
        }, function (erro) { return console.log(erro); });
        this.http.get('http://localhost:50411/api/Restaurante/')
            .map(function (res) { return res.json(); })
            .subscribe(function (restaurantes) {
            _this.restaurantes = restaurantes;
            console.log(_this.restaurantes);
        }, function (erro) { return console.log(erro); });
    }
    PratoAlterarComponent.prototype.alterar = function () {
        var _this = this;
        console.log(this.prato);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var urlSearchParams = new http_1.URLSearchParams();
        urlSearchParams.append('id_prato', this.prato.id_prato);
        urlSearchParams.append('nome_prato', this.prato.nome_prato);
        urlSearchParams.append('preco_prato', this.prato.preco_prato);
        urlSearchParams.append('id_restaurante', this.prato.id_restaurante);
        var body = urlSearchParams.toString();
        this.http.put('http://localhost:50411/api/Prato/', body, { headers: headers })
            .subscribe(function () {
            _this.mensagem = 'Prato alterado com sucesso.';
            console.log('Prato alterado via WEBAPI.');
        });
    };
    return PratoAlterarComponent;
}());
PratoAlterarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cadastro',
        templateUrl: './prato.alterar.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, http_1.Http])
], PratoAlterarComponent);
exports.PratoAlterarComponent = PratoAlterarComponent;
//# sourceMappingURL=prato.alterar.component.js.map