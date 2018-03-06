import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';

import { GumbyCommonModule } from '../common/gumby-common.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ActivityService } from './services/activity-service';
import { ActivityComponent } from './components/activity.component';
import { ActivityInputComponent } from './components/activity-input.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,

    GumbyCommonModule,

    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  declarations: [
    HomeComponent,
    ActivityComponent,
    ActivityInputComponent
  ],
  providers: [
    ActivityService
  ]
})
export class HomeModule { }
