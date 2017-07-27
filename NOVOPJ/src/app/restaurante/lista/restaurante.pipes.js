"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var FiltroPorNomeRestaurante = (function () {
    function FiltroPorNomeRestaurante() {
    }
    FiltroPorNomeRestaurante.prototype.transform = function (items, criteria) {
        return items.filter(function (item) {
            for (var key in item) {
                if (("" + item[key]).includes(criteria)) {
                    return true;
                }
            }
            return false;
        });
    };
    return FiltroPorNomeRestaurante;
}());
FiltroPorNomeRestaurante = __decorate([
    core_1.Pipe({
        name: 'filtroPorNomeRestaurante'
    })
], FiltroPorNomeRestaurante);
exports.FiltroPorNomeRestaurante = FiltroPorNomeRestaurante;
//# sourceMappingURL=restaurante.pipes.js.map