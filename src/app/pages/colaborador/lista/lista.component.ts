import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { Colaborador } from 'src/app/models/colaborador';
import { ColaboradorService } from 'src/app/services/colaborador.service';
import { DialogFormColaboradorComponent } from '../dialog-form-colaborador/dialog-form-colaborador.component';
import { Barbeiro } from 'src/app/models/barbeiro';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  displayedColumns: string[] = ['identificador', 'nome', 'cpf', 'disponibilidade', 'barbearia', 'acoes'];
  dataSource = new MatTableDataSource<Barbeiro>([]);
  barbeiros: Barbeiro[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private barbeiroService: ColaboradorService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.listarBarbeiros();
  }

  listarBarbeiros(): void {
    this.barbeiroService.listar().subscribe(barbeiros => {
      this.barbeiros = barbeiros;
      this.dataSource = new MatTableDataSource(barbeiros);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  novo(): void {
    const dialogRef = this.dialog.open(DialogFormColaboradorComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listarBarbeiros();
      }
    });
  }

  editar(barbeiro: Barbeiro): void {
    const dialogRef = this.dialog.open(DialogFormColaboradorComponent, {
      data: barbeiro
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listarBarbeiros();
      }
    });
  }

  excluir(barbeiro: Barbeiro): void {
    if (confirm(`Tem certeza que deseja excluir o barbeiro ${barbeiro.nome}?`)) {
      this.barbeiroService.excluir(barbeiro.id).subscribe(response => {
        if (response) {
          this.listarBarbeiros();
        }
      });
    }
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
