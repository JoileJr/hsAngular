import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { LoginRoutingModule } from './login-routing.module';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AppMaterialModule,
  ]
})
export class LoginModule { }
