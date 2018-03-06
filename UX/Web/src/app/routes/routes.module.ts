import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesRoutingModule } from './routes-routing.module';
import { RoutesComponent } from './components/routes.component';

@NgModule({
  imports: [
    CommonModule,
    RoutesRoutingModule
  ],
  declarations: [ RoutesComponent ]
})
export class RoutesModule { }
