import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import dashboardRoute from './views/dashboard/routes';
import cadastroEstadoRoute from './modules/estado/routes';
import loginRoute from './views/login/routes';

const routes: Routes = [...dashboardRoute, ...cadastroEstadoRoute];

console.log(routes)
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
