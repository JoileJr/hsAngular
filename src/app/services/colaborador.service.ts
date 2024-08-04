import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Barbeiro, BarbeiroRequestDTO } from '../models/barbeiro';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {
  private apiUrl = 'http://127.0.0.1:8000/api/v1';

  constructor(private _httpClient: HttpClient) { }

  listar(): Observable<any> {
    return this._httpClient.get(`${this.apiUrl}/barbeiros/`);
  }

  salvar(estabelecimento: Barbeiro): Observable<any> {
    return this._httpClient.post(`${this.apiUrl}/barbeiros/`, estabelecimento);
  }

  editar(estabelecimento: Barbeiro): Observable<any> {
    //const req = this.createRequestDto(estabelecimento);
    return this._httpClient.put(`${this.apiUrl}/barbeiros/${estabelecimento.id}/`, estabelecimento);
  }

  excluir(id: number): Observable<any> {
    return this._httpClient.delete(`${this.apiUrl}/barbeiros/${id}/`);
  }

  private createRequestDto(obj: Barbeiro): BarbeiroRequestDTO {
    const req: BarbeiroRequestDTO = {
      id: obj.id,
      cpf: obj.cpf,
      disponibilidade: obj.disponibilidade,
      nome: obj.nome,
      barbearia: obj.barbearia.id
    };

    return req;
  }
}
