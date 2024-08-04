import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Servico } from '../models/servico';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  private apiUrl = 'http://127.0.0.1:8000/api/v1';

  constructor(private _httpClient: HttpClient) { }

  listar(): Observable<any> {
    return this._httpClient.get(`${this.apiUrl}/servicos/`);
  }

  salvar(obj: Servico): Observable<any> {
    return this._httpClient.post(`${this.apiUrl}/servicos/`, obj);
  }

  editar(obj: Servico): Observable<any> {
    return this._httpClient.put(`${this.apiUrl}/servicos/${obj.id}/`, obj);
  }

  excluir(id: number): Observable<any> {
    return this._httpClient.delete(`${this.apiUrl}/servicos/${id}/`);
  }
}
