import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Usuario} from '../models/usuarios.model';
import { catchError, map, tap } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url='http://10.70.57.253:8081';
  usuarios:any;
  constructor(private _httpService: HttpClient) { }

  // //Http Options
   httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
     })
   }

  //GET
  getUsuarios(): Observable<Usuario[]>{
    return this._httpService.get<Usuario[]>(`${this.url}/usuarios`);
  }

  //GET by ID
  getUsuario(id: number): Observable<Usuario> {
    return this._httpService.get<Usuario>(`${this.url}/usuarios/${id}`);
    
  }

  //PUT
  updateUsuario(usuario: Usuario): Observable<any> {
    return this._httpService.put(`${this.url}/usuarios`,usuario, this.httpOptions).pipe();
    
  }

  //POST
  addUsuario(usuario: Usuario): Observable<Usuario>{
    console.log(usuario);
    return this._httpService.post<Usuario>(`${this.url}/usuarios/`,usuario, this.httpOptions).pipe();
  }

  //DELETE
  deleteUsuario(usuario: Usuario): Observable<any> {
    var id=usuario.id;
    return this._httpService.delete(`${this.url}/usuarios/${id}`, this.httpOptions).pipe();
    
  }



}
