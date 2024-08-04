import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonagensRoutingModule } from './personagens-routing.module';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { ListaComponent } from './lista/lista.component';


@NgModule({
  declarations: [
    ListaComponent
  ],
  imports: [
    CommonModule,
    PersonagensRoutingModule,
    AppMaterialModule,
  ]
})
export class PersonagensModule { }
