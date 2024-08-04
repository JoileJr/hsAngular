import { Barbearia } from "./barbearia";

export interface Barbeiro {
  id: number;
  nome: string;
  cpf: string;
  disponibilidade: string;
  barbearia: Barbearia;
}

export interface BarbeiroRequestDTO {
  id: number;
  nome: string;
  cpf: string;
  disponibilidade: string;
  barbearia: number;
}

