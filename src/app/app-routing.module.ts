import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsuariosComponent} from '../app/components/usuarios/usuarios.component';
import {UsuariosdetailComponent} from './components/usuariosdetail/usuariosdetail.component'
import {AgregarComponent} from './components/agregar/agregar.component'


const routes: Routes = [
  {path: '', redirectTo: '/list-users', pathMatch: 'full'},
  {path:'list-users', component:UsuariosComponent},
  { path: 'detail/:id', component: UsuariosdetailComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: 'detail/', component: UsuariosdetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
