import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Personagem } from 'src/app/models/personagem';

import { PersonagemService } from '../../../services/personagem.service';
import { Servico } from 'src/app/models/servico';

@Component({
  selector: 'app-dialog-form-personagem',
  templateUrl: './dialog-form-personagem.component.html',
  styleUrls: ['./dialog-form-personagem.component.scss']
})
export class DialogFormPersonagemComponent implements OnInit {
  form!: FormGroup;
  edicao: boolean = false;

  constructor(private _formBuilder: FormBuilder,
    private _personagemService: PersonagemService,
    private _dialogRef: MatDialogRef<DialogFormPersonagemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Servico) {
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      nome: ['', Validators.required],
      preco: ['', Validators.required],
      descricao: ['', Validators.required],
      duracao: ['', Validators.required],
      categoria: ['', Validators.required],
    });

    if (this.data) {
      this.edicao = true;
      this.form.patchValue({
        nome: this.data.nome,
        preco: this.data.preco,
        descricao: this.data.descricao,
        duracao: this.data.duracao,
        categoria: this.data.categoria,
      });
    }
  }

  salvar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const personagem = { ...this.form.getRawValue() };
    if (this.edicao) {
      personagem.id = this.data.id;
      this._personagemService.editar(personagem).subscribe(response => {
        this._dialogRef.close(response);
      });
      return;
    }
    this._personagemService.salvar(personagem).subscribe(response => {
      this._dialogRef.close(response);
    });
  }

  close() {
    this._dialogRef.close();
  }

}
