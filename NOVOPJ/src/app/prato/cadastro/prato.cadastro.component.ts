import { Component } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

import { PratoComponent } from '../prato.component';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './prato.cadastro.component.html',
})
export class PratoCadastroComponent {

    restaurantes: Object[] = []
    mensagem: string = "";
    prato: PratoComponent = new PratoComponent();
    http: Http;
    router: Router;

    constructor(http: Http) {
        this.http = http;

        this.http.get('http://localhost:50411/api/Restaurante/')
            .map(res => res.json())
            .subscribe(restaurantes => {
                this.restaurantes = restaurantes;
            }, erro => console.log(erro));
    }

    cadastrar() {

        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('nome_prato', this.prato.nome_prato);
        urlSearchParams.append('preco_prato', this.prato.preco_prato);
        urlSearchParams.append('id_restaurante', this.prato.id_restaurante);
        let body = urlSearchParams.toString()

        this.http.post('http://localhost:50411/api/Prato/', body, { headers: headers })
            .subscribe(() => {
                this.prato.nome_prato = "";
                this.prato.preco_prato = "";
                this.prato.id_restaurante = "";
                this.mensagem = "Prato cadastrado com sucesso.";
            });
    }


}
