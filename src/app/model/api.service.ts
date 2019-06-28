import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  link = 'https://dadosabertos.camara.leg.br/api/v2/deputados';
  

  constructor(private recebe: HttpClient) { }

  recebe_dep(): Observable <any> {
    return this.recebe.get<any> (`${this.link}`);
  }

  recebe_id(id:number): Observable <any> {
    return this.recebe.get<any> (`${this.link}/${id}`);
  }

}
