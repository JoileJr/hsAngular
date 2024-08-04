import { Endereco } from "./endereco";

export interface Barbearia {
  id: number;
  nome: string;
  cnpj: string;
  endereco: Endereco;
  horario_funcionamento: string;
}
