import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { EstabelecimentoService } from '../../../services/estabelecimento.service';
import { Barbearia } from 'src/app/models/barbearia';


@Component({
  selector: 'app-dialog-form-estabelecimento',
  templateUrl: './dialog-form-estabelecimento.component.html',
  styleUrls: ['./dialog-form-estabelecimento.component.scss']
})
export class DialogFormEstabelecimentoComponent implements OnInit {
  form!: FormGroup;
  edicao: boolean = false;

  constructor(private _formBuilder: FormBuilder,
              private _barbeariaService: EstabelecimentoService,
              private _dialogRef: MatDialogRef<DialogFormEstabelecimentoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Barbearia) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      nome: ['', Validators.required],
      cnpj: ['', [Validators.required, Validators.pattern(/^\d{14}$/)]],
      horario_funcionamento: ['', Validators.required],
      endereco: this._formBuilder.group({
        logradouro: ['', Validators.required],
        numero: ['', Validators.required],
        complemento: [''],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', [Validators.required, Validators.maxLength(2)]],
        cep: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]]
      })
    });

    if (this.data) {
      this.edicao = true;
      this.form.patchValue(this.data);
    }
  }

  salvar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const barbearia = { ...this.form.getRawValue() };
    if (this.edicao) {
      barbearia.id = this.data.id;
      this._barbeariaService.editar(barbearia).subscribe(response => {
        this._dialogRef.close(response);
      });
      return;
    }
    this._barbeariaService.salvar(barbearia).subscribe(response => {
      this._dialogRef.close(response);
    });
  }

  close(): void {
    this._dialogRef.close()
  }

}
