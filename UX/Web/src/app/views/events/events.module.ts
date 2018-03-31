import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';
import { EventsViewComponent } from './events-view.component';
import { EventComponent } from './subcomponents/event.component';

import { GumbyCommonModule } from '../../components/gumby-common.module';

import { MatCardModule } from '@angular/material/card';

import { EventService } from '../../services/event-service';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,

    GumbyCommonModule,

    MatCardModule
  ],
  declarations: [
    EventsViewComponent,
    EventComponent
  ],
  providers: [
    EventService
  ]
})
export class EventsModule { }
