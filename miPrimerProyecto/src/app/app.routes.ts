import { Routes } from '@angular/router';
import { Clientes } from './clientes/listar-clientes/clientes';
import { Form } from './clientes/crearClientes/form';

export const routes: Routes = [
  {path: '', redirectTo: 'clientes/listarClientes', pathMatch: 'full'},
  {path: 'clientes/listarClientes', component: Clientes},
  {path: 'clientes/crearClientes', component: Form},
];
