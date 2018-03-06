import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { AdComponent } from './components/ad.component';

@NgModule({
  imports: [
    CommonModule,

    MatCardModule
  ],
  declarations: [
    AdComponent
  ],
  providers: [
  ],
  exports: [
      AdComponent
  ]
})
export class GumbyCommonModule { }
