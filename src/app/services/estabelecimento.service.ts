import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Barbearia } from '../models/barbearia';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {
  private apiUrl = 'http://127.0.0.1:8000/api/v1';

  constructor(private _httpClient: HttpClient) { }

  listar(): Observable<any> {
    return this._httpClient.get(`${this.apiUrl}/barbearias/`);
  }

  salvar(estabelecimento: Barbearia): Observable<any> {
    return this._httpClient.post(`${this.apiUrl}/barbearias/`, estabelecimento);
  }

  editar(estabelecimento: Barbearia): Observable<any> {
    return this._httpClient.put(`${this.apiUrl}/barbearias/${estabelecimento.id}/`, estabelecimento);
  }

  excluir(id: number): Observable<any> {
    return this._httpClient.delete(`${this.apiUrl}/barbearias/${id}/`);
  }
}
