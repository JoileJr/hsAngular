import { AboutComponent } from './pages/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'clientes',
    loadChildren: () => import('./pages/profissionais/profissionais.module').then((m) => m.ProfissionaisModule),
  },
  {
    path: 'estabelecimentos',
    loadChildren: () => import('./pages/estabelecimentos/estabelecimentos.module').then((m) => m.EstabelecimentosModule),
  },
  {
    path: 'servicos',
    loadChildren: () => import('./pages/personagens/personagens.module').then((m) => m.PersonagensModule),
  },
  {
    path: 'colaborador',
    loadChildren: () => import('./pages/colaborador/colaborador.module').then((m) => m.ColaboradorModule),
  },
  {
    path: 'sobre',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
