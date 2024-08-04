import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../../shared/app-material/app-material.module';
import { ListaComponent } from './lista/lista.component';
import { ProfissionaisRoutingModule } from './profissionais-routing.module';
import { DialogFormProfissional } from './dialog-form-profissional/dialog-form-profissional.component';


@NgModule({
  declarations: [
    ListaComponent,
    DialogFormProfissional
  ],
  imports: [
    CommonModule,
    ProfissionaisRoutingModule,
    AppMaterialModule,
  ]
})
export class ProfissionaisModule { }
