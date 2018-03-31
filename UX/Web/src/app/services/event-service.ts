import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Event } from '../model/event';
import { EVENTS_MOCK } from '../../mocks/event-mock';

@Injectable()
export class EventService {

  constructor() { }

  getEvents(): Observable<Event[]> {
    return of(EVENTS_MOCK);
  }

  getEvent(id: number): Observable<Event> {
    for (let event of EVENTS_MOCK) {
      if (event.id == id) {
        return of(event);
      }
    }
    return of(null);
  }
}
