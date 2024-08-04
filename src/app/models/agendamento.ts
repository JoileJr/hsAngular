import { Barbearia } from "./barbearia";
import { Barbeiro } from "./barbeiro";
import { Cliente } from "./cliente";
import { Servico } from "./servico";

export interface Agendamento {
  id: number;
  cliente: Cliente;
  barbeiro: Barbeiro;
  servico: Servico;
  data_hora: string;
  status: string;
  barbearia: Barbearia;
}
