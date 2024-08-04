import { DialogFormEstabelecimentoComponent } from '../dialog-form-estabelecimento/dialog-form-estabelecimento.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { EstabelecimentoService } from './../../../services/estabelecimento.service';
import { Estabelecimento } from 'src/app/models/estabelecimento';
import { Barbearia } from 'src/app/models/barbearia';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'endereco', 'telefone', 'acoes'];
  dataSource = new MatTableDataSource([]);
  estabelecimentos: Barbearia[] = [];

  constructor(private _estabelecimentoService: EstabelecimentoService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.listarEstabelecimentos();
  }

  listarEstabelecimentos(): void {
    this._estabelecimentoService.listar().subscribe(estabelecimentos => {
      this.estabelecimentos = estabelecimentos;
      this.dataSource = new MatTableDataSource(estabelecimentos);
    });
  }

  novo(): void {
    const dialogRef = this.dialog.open(DialogFormEstabelecimentoComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listarEstabelecimentos();
      }
    });
  }

  editar(estabelecimento: Barbearia): void {
    const dialogRef = this.dialog.open(DialogFormEstabelecimentoComponent, {
      data: estabelecimento
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listarEstabelecimentos();
      }
    });
  }

  excluir(estabelecimento: Barbearia): void {
    this._estabelecimentoService.excluir(estabelecimento.id).subscribe(response => {
      if (response) {
        this.listarEstabelecimentos();
      }
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // Poderia filtrar usando Object.keys(this.estabelecimentos).join(" ").toLowerCase() ...
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
