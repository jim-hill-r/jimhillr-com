import { Component } from '@angular/core';

import { Event } from '../../model/event';
import { EventService } from '../../services/event-service';

@Component({
  selector: 'events-view',
  templateUrl: './events-view.component.html',
  styleUrls: ['./events-view.component.css']
})
export class EventsViewComponent {
  constructor(
    private eventService: EventService
  ) { }

  events: Event[];

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    }
    );
  }
}
