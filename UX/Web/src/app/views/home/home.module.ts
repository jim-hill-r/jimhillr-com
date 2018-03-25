import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeViewComponent } from './home-view.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ActivityService } from '../../services/activity-service';
import { ClimbService } from '../../services/climb-service';
import { ClimberService } from '../../services/climber-service';
import { RouteService } from '../../services/route-service';
import { LocationService } from '../../services/location-service';

import { ActivityComponent } from './subcomponents/activity.component';
import { ClimbComponent } from './subcomponents/climb.component';
import { RouteComponent } from './subcomponents/route.component';
import { AdvertisementComponent } from '../../components/advertisment/advertisement.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,

    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule

  ],
  declarations: [
    HomeViewComponent,
    ActivityComponent,
    ClimbComponent,
    RouteComponent,
    AdvertisementComponent
  ],
  providers: [
    ActivityService,
    ClimbService,
    ClimberService,
    RouteService,
    LocationService
  ]
})
export class HomeModule { }
