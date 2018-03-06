import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminologyRoutingModule } from './terminology-routing.module';
import { TerminologyComponent } from './components/terminology.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TerminologyService } from './services/terminology-service';

@NgModule({
  imports: [
    CommonModule,
    TerminologyRoutingModule,

    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  declarations: [TerminologyComponent],
  providers: [
    TerminologyService
  ]
})
export class TerminologyModule { }
