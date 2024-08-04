import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { DialogFormPersonagemComponent } from './pages/personagens/dialog-form-personagem/dialog-form-personagem.component';
import { DialogFormColaboradorComponent } from './pages/colaborador/dialog-form-colaborador/dialog-form-colaborador.component';
import { AuthInterceptor } from './interceptors/AuthInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    DialogFormPersonagemComponent,
    DialogFormColaboradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
