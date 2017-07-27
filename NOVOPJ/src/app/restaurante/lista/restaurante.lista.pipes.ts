import { Pipe, PipeTransform } from '@angular/core';
import { RestauranteListaComponent } from './restaurante.lista.component';

@Pipe({
    name: 'filtroPorNomeRestaurante'
})
export class FiltroPorNomeRestaurante implements PipeTransform {

    transform(items: any[], criteria: any): any {

        return items.filter(item => {
            for (let key in item) {
                if (("" + item[key]).includes(criteria)) {
                    return true;
                }
            }
            return false;
        });
    }

}