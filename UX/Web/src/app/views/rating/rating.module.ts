import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingRoutingModule } from './rating-routing.module';
import { RatingViewComponent } from './rating-view.component';

@NgModule({
  imports: [
    CommonModule,
    RatingRoutingModule
  ],
  declarations: [RatingViewComponent],
  providers: [
    
  ]
})
export class RatingModule { }
