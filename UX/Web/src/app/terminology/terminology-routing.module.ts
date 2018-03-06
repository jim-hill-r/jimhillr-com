import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerminologyComponent } from './components/terminology.component';


const routes: Routes = [
  {
    path: '',
    component: TerminologyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerminologyRoutingModule { }
