import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaComponent } from './lista/lista.component';
import { DialogFormEstabelecimentoComponent } from './dialog-form-estabelecimento/dialog-form-estabelecimento.component';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { EstabelecimentosRoutingModule } from './estabelecimentos-routing.module';


@NgModule({
  declarations: [
    ListaComponent,
    DialogFormEstabelecimentoComponent
  ],
  imports: [
    CommonModule,
    EstabelecimentosRoutingModule,
    AppMaterialModule,
  ]
})
export class EstabelecimentosModule { }
