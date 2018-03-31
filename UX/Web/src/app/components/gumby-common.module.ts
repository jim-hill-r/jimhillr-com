import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { AdvertisementComponent } from './advertisment/advertisement.component';

@NgModule({
  imports: [
    CommonModule,

    MatCardModule
  ],
  declarations: [
    AdvertisementComponent
  ],
  exports: [
    AdvertisementComponent
  ]
})
export class GumbyCommonModule { }
