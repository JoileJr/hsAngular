import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColaboradorRoutingModule } from './colaborador-routing.module';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { ListaComponent } from './lista/lista.component';


@NgModule({
  declarations: [
    ListaComponent
  ],
  imports: [
    CommonModule,
    ColaboradorRoutingModule,
    AppMaterialModule,
  ]
})
export class ColaboradorModule { }
