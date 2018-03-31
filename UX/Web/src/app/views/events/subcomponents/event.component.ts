import { Component, Input } from '@angular/core';
import { Event } from '../../../model/event';
import { EventService } from '../../../services/event-service';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  constructor(private eventService: EventService) {

  }

  @Input() event: Event = new Event();
  @Input() edit: boolean = false;

}
