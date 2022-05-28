import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string = 'https://app-completa-test.herokuapp.com/';
  uri: string = 'api/user/';

  constructor( private http: HttpClient ) { }

  crearUsuario( user: User ): Observable<User> {
    return this.http.post<User>(this.url+this.uri, user);
  }
  
}
