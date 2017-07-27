import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'restaurante',
  templateUrl: './restaurante.component.html',
})
export class RestauranteComponent  {

    @Input() id_restaurante: string = '';
    @Input() nome_restaurante: string = '';
}
