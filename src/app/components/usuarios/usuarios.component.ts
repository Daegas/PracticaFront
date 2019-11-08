import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../../services/usuarios.service';
import {Usuario} from '../../models/usuarios.model';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: any;
  selectedUsuario: Usuario;

  constructor(private _usuariosService: UsuariosService) { }

  ngOnInit() {
     this._usuariosService.getUsuarios().subscribe(res=>{
       this.usuarios=res});
  }

  delete(usuario: Usuario): void{
    this.usuarios = this.usuarios.filter(u => u == usuario);
    this._usuariosService.deleteUsuario(usuario).subscribe();
  }


}
