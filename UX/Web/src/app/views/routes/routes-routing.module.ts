import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutesViewComponent } from './routes-view.component';


const routes: Routes = [
  {
    path: '',
    component: RoutesViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
