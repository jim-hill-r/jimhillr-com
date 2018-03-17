import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerminologyViewComponent } from './terminology-view.component';


const routes: Routes = [
  {
    path: '',
    component: TerminologyViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerminologyRoutingModule { }
