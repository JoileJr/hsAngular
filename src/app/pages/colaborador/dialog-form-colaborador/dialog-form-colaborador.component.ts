import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Barbearia } from 'src/app/models/barbearia';
import { Barbeiro } from 'src/app/models/barbeiro';
import { ColaboradorService } from 'src/app/services/colaborador.service';
import { EstabelecimentoService } from 'src/app/services/estabelecimento.service';


@Component({
  selector: 'app-dialog-form-colaborador',
  templateUrl: './dialog-form-colaborador.component.html',
  styleUrls: ['./dialog-form-colaborador.component.scss']
})
export class DialogFormColaboradorComponent implements OnInit {
  form!: FormGroup;
  edicao: boolean = false;
  barbearias: Barbearia[] = [];

  constructor(private _formBuilder: FormBuilder,
    private _barbeiroService: ColaboradorService,
    private _barbeariaService: EstabelecimentoService,
    private _dialogRef: MatDialogRef<DialogFormColaboradorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Barbeiro) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      disponibilidade: ['', Validators.required],
      barbearia: ['', Validators.required],
    });

    this._barbeariaService.listar().subscribe(barbearias => {
      this.barbearias = barbearias;
    });

    if (this.data) {
      this.edicao = true;
      this.form.patchValue({
        nome: this.data.nome,
        cpf: this.data.cpf,
        disponibilidade: this.data.disponibilidade,
        barbearia: this.data.barbearia,
      });
    }
  }

  salvar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const barbeiro = { ...this.form.getRawValue() } as Barbeiro;
    if (this.edicao) {
      barbeiro.id = this.data.id;
      this._barbeiroService.editar(barbeiro).subscribe(response => {
        this._dialogRef.close(response);
      });
    } else {
      this._barbeiroService.salvar(barbeiro).subscribe(response => {
        this._dialogRef.close(response);
      });
    }
  }
}
