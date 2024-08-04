import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { PersonagemService } from 'src/app/services/personagem.service';
import { DialogFormPersonagemComponent } from '../dialog-form-personagem/dialog-form-personagem.component';
import { Servico } from 'src/app/models/servico';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'preco', 'categoria','acoes'];
  dataSource = new MatTableDataSource([]);
  servicos: Servico[] = [];

  constructor(private _personagemService: PersonagemService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.listarPersonagens();
  }

  listarPersonagens(): void {
    this._personagemService.listar().subscribe(servicos => {
      this.servicos = servicos;
      this.dataSource = new MatTableDataSource(servicos);
    });
  }

  novo(): void {
    const dialogRef = this.dialog.open(DialogFormPersonagemComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listarPersonagens();
      }
    });
  }

  editar(personagem: Servico): void {
    const dialogRef = this.dialog.open(DialogFormPersonagemComponent, {
      data: personagem
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listarPersonagens();
      }
    });
  }

  excluir(personagem: Servico): void {
    this._personagemService.excluir(personagem.id).subscribe(response => {
      if (response) {
        this.listarPersonagens();
      }
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // Poderia filtrar usando Object.keys(this.personagens).join(" ").toLowerCase() ...
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
