import { Component } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import { RestauranteComponent } from '../restaurante.component';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './restaurante.alterar.component.html',
})
export class RestauranteAlterarComponent {

    restaurante: RestauranteComponent = new RestauranteComponent();
    http: Http;
    id: number;
    mensagem: string = '';

    constructor(private rota: ActivatedRoute, http: Http) {
        this.http = http;
        this.id = rota.snapshot.params['id'];

        this.http.get('http://localhost:50411/api/Restaurante/' + this.id)
            .map(res => res.json())
            .subscribe(restaurantes => {
                this.restaurante = restaurantes;
            },
            erro => console.log(erro));
    }

    alterar() {
        console.log(this.restaurante);

        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('id_restaurante', this.restaurante.id_restaurante);
        urlSearchParams.append('nome_restaurante', this.restaurante.nome_restaurante);
        let body = urlSearchParams.toString()

        this.http.put('http://localhost:50411/api/Restaurante/', body, { headers: headers })
            .subscribe(() => {
                this.mensagem = 'Restaurante alterado com sucesso.';
                console.log('Restaurante alterado via WEBAPI.');
            });
    }

}
