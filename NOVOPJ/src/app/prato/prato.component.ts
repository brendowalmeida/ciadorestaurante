import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'prato',
    templateUrl: './prato.component.html',
})
export class PratoComponent {

    @Input() id_prato: string = '';
    @Input() nome_prato: string = '';
    @Input() preco_prato: string = '';
    @Input() id_restaurante: string = '';
    @Input() nome_restaurante: string = '';

}

