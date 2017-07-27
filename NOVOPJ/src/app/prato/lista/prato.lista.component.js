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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var prato_component_1 = require("../prato.component");
var PratoListaComponent = (function () {
    function PratoListaComponent(http) {
        var _this = this;
        this.pratos = [];
        this.mensagem = '';
        this.http = http;
        this.http.get('http://localhost:50411/api/Prato/')
            .map(function (res) { return res.json(); })
            .subscribe(function (pratos) {
            _this.pratos = pratos;
        }, function (erro) { return console.log(erro); });
    }
    PratoListaComponent.prototype.excluir = function (prato) {
        var _this = this;
        if (prato === void 0) { prato = new prato_component_1.PratoComponent(); }
        this.http.delete('http://localhost:50411/api/Prato/' + prato.id_prato)
            .subscribe(function () {
            var indiceDoPrato = _this.pratos.indexOf(prato);
            if (indiceDoPrato > -1) {
                _this.mensagem = 'Prato removido com sucesso.';
                console.log('Prato removido via WEBAPI.');
                _this.pratos.slice(indiceDoPrato, 1);
                _this.atualizarLista();
            }
        }, function (erro) {
            console.log(erro);
            _this.mensagem = 'Não foi possível remover o Prato.';
        });
    };
    PratoListaComponent.prototype.atualizarLista = function () {
        var _this = this;
        this.http.get('http://localhost:50411/api/Prato/')
            .map(function (res) { return res.json(); })
            .subscribe(function (pratos) {
            _this.pratos = pratos;
        }, function (erro) { return console.log(erro); });
    };
    PratoListaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'lista',
            templateUrl: './prato.lista.component.html',
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], PratoListaComponent);
    return PratoListaComponent;
}());
exports.PratoListaComponent = PratoListaComponent;
//# sourceMappingURL=prato.lista.component.js.map