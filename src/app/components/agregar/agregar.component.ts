import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuarios.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {UsuariosService} from '../../services/usuarios.service';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

	
  	usuario = new Usuario();

  constructor(
  	private route: ActivatedRoute,
    private usuarioService: UsuariosService,
    private location: Location) { }

  ngOnInit() {
  }

  // crear(nombre:string,apellido:string,edad:number, direccion:string):void{
  //   this.usuario.id=null;
  //   console.log('nombresimple', nombre)
  //   this.usuario.nombre=nombre;
  //   console.log('nombre', this.usuario.nombre)
  //   this.usuario.apellido=apellido;
  //   this.usuario.edad=edad;
  //   this.usuario.direccion=direccion;
  //   this.usuarioService.addUsuario(this.usuario).subscribe();
  // }

  goBack():void{
    this.location.back();
  }

  crear():void{
    this.usuario.id=null;
    this.usuarioService.addUsuario(this.usuario).subscribe();
  }

}
