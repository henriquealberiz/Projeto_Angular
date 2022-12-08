import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Foto } from '../fotografia/foto/foto';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  readonly API = 'http://localhost:3000/fotos/'


  //linguagem da aplicação (content-type)
//tradutor - HttpOptions
  HttpOptions={
    headers: new HttpHeaders({'Content-Type' : 'application/json'}) 
  }



  constructor(private http: HttpClient) { }

// capturar as fotos
getFotos(){
  return this.http.get<Foto[]>('http://localhost:3000/fotos')
}

// metodo para cadastrar fotos
// JSON.stringify (foto) - converte os dados para formato json
postFotos(foto: Foto){
  return this.http.post(this.API, JSON.stringify(foto), this.HttpOptions).subscribe();
  location.reload();
}

// metodo para apagar
delFotos(id: number){
  return this.http.delete(this.API + id).subscribe();
  location.reload();

}


}
