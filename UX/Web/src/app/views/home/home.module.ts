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
import { ActivityComponent } from './subcomponents/activity.component';
import { CreateActivityComponent } from './subcomponents/create-activity.component';
import { AdvertisementComponent } from '../../components/advertisment/advertisement.component';

import { FriendsModule } from '../friends/friends.module';

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
    MatToolbarModule,

    FriendsModule
  ],
  declarations: [
    HomeViewComponent,
    ActivityComponent,
    CreateActivityComponent,
    AdvertisementComponent
  ],
  providers: [
    ActivityService
  ]
})
export class HomeModule { }
