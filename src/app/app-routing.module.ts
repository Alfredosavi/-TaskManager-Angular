import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaRoutes } from './tarefas';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/tarefas/listar',
    pathMatch: 'full',
  },
  ...TarefaRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // para iniciar as rotas e garantir que seja unica
  exports: [RouterModule],
})
export class AppRoutingModule {}
