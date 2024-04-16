import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import dashboardRoute from './views/dashboard/routes';

const routes: Routes = [dashboardRoute];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
