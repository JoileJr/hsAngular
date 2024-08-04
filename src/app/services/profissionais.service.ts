import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Profissional } from '../models/profissional';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ProfissionaisService {

  private apiUrl = 'http://127.0.0.1:8000/api/v1';

  constructor(private _httpClient: HttpClient) { }

  listar(): Observable<any> {
    return this._httpClient.get(`${this.apiUrl}/clientes/`);
  }

  salvar(estabelecimento: Cliente): Observable<any> {
    return this._httpClient.post(`${this.apiUrl}/clientes/`, estabelecimento);
  }

  editar(estabelecimento: Cliente): Observable<any> {
    return this._httpClient.put(`${this.apiUrl}/clientes/${estabelecimento.id}/`, estabelecimento);
  }

  excluir(id: number): Observable<any> {
    return this._httpClient.delete(`${this.apiUrl}/clientes/${id}/`);
  }

}
