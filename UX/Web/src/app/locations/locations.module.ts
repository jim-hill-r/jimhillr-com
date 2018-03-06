import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './components/locations.component';

@NgModule({
  imports: [
    CommonModule,
    LocationsRoutingModule
  ],
  declarations: [ LocationsComponent ]
})
export class LocationsModule { }
