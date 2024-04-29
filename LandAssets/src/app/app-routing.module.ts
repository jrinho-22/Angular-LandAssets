import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import dashboardRoute from './views/dashboard/routes';
import cadastroEstadoRoute from './modules/cadastro-estado/routes';

const routes: Routes = [dashboardRoute, cadastroEstadoRoute];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
