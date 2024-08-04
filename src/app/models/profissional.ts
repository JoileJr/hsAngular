import { Estabelecimento } from 'src/app/models/estabelecimento';
export interface Profissional {
  id: number;
  nome: string;
  endereco: string;
  celular: string;
  telefone: string;
  funcao: string;
  estabelecimentos: Estabelecimento[];
}
