import { DialogFormProfissional } from '../dialog-form-profissional/dialog-form-profissional.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { ProfissionaisService } from './../../../services/profissionais.service';
import { Profissional } from 'src/app/models/profissional';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'telefone', 'email', 'cpf', 'acoes'];
  dataSource = new MatTableDataSource([]);
  profissionais: Profissional[] = [];

  constructor(private _profissionaisService: ProfissionaisService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.listarProfissionais();
  }

  listarProfissionais(): void {
    this._profissionaisService.listar().subscribe(profissionais => {
      this.profissionais = profissionais;
      this.dataSource = new MatTableDataSource(profissionais);
    });
  }

  novo(): void {
    const dialogRef = this.dialog.open(DialogFormProfissional);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listarProfissionais();
      }
    });
  }

  editar(cli: Cliente): void {
    const dialogRef = this.dialog.open(DialogFormProfissional, {
      data: cli
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listarProfissionais();
      }
    });
  }

  excluir(cli: Cliente): void {
    this._profissionaisService.excluir(cli.id).subscribe(response => {
      if (response) {
        this.listarProfissionais();
      }
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
