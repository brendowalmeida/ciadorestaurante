import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { RestauranteListaComponent } from './restaurante/lista/restaurante.lista.component';
import { RestauranteCadastroComponent } from './restaurante/cadastro/restaurante.cadastro.component';
import { RestauranteAlterarComponent } from './restaurante/alterar/restaurante.alterar.component';
import { PratoComponent } from './prato/prato.component';
import { PratoListaComponent } from './prato/lista/prato.lista.component';
import { PratoCadastroComponent } from './prato/cadastro/prato.cadastro.component';
import { PratoAlterarComponent } from './prato/alterar/prato.alterar.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurante', component: RestauranteListaComponent },
    { path: 'restaurante/cadastro', component: RestauranteCadastroComponent },
    { path: 'restaurante/alterar/:id', component: RestauranteAlterarComponent },
    { path: 'prato', component: PratoListaComponent },
    { path: 'prato/cadastro', component: PratoCadastroComponent },
    { path: 'prato/alterar/:id', component: PratoAlterarComponent },
    { path: '**', component: HomeComponent }
];

export const routing = RouterModule.forRoot(appRoutes);

