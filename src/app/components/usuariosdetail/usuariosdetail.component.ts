import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../models/usuarios.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {UsuariosService} from '../../services/usuarios.service';
import {Observable} from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import {NgForm} from '@angular/forms'



@Component({
  selector: 'app-usuariosdetail',
  templateUrl: './usuariosdetail.component.html',
  styleUrls: ['./usuariosdetail.component.css']
})
export class UsuariosdetailComponent implements OnInit {

  usuario: Usuario;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuariosService,
    private location: Location
  ) { }

  ngOnInit() {
    this.loading=true;
    this.getUsuarioById();
    console.log('init',this.usuario)
  }

  saveForm(form:NgForm){
    if(form.invalid){
      console.log('Formulario invalido')
      return
    }
  }

  getUsuarioById(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.usuarioService.getUsuario(id)
      .subscribe((res:Usuario)=>{
        console.log('res:',res[0].nombre);
        this.usuario=res[0];
        this.usuario.id=id
        });
  }

  goBack():void{
    this.location.back();
  }

  actualizar():void{
    this.usuarioService.updateUsuario(this.usuario).subscribe();
  }


}