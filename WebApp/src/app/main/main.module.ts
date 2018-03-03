import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

const globalRoutes: Routes = [
  { path: 'gumby', loadChildren: './../gumby/gumby.module#GumbyModule' },
  { path: '**', loadChildren: './../notfound/notfound.module#NotFoundModule' }
];

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(globalRoutes)
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
