import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DownloadViewComponent } from './download-view.component';


const routes: Routes = [
  {
    path: '',
    component: DownloadViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloadRoutingModule { }
