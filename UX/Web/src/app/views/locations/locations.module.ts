import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsViewComponent } from './locations-view.component';

@NgModule({
  imports: [
    CommonModule,
    LocationsRoutingModule
  ],
  declarations: [ LocationsViewComponent ]
})
export class LocationsModule { }
