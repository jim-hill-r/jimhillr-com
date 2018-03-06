import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'terminology', loadChildren: './terminology/terminology.module#TerminologyModule' },
  { path: '**', loadChildren: './notfound/notfound.module#NotFoundModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class GumbyRoutingModule { }
