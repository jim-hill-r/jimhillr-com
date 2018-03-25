import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Location } from '../model/location';
import { LOCATIONS_MOCK } from '../../mocks/location-mock';

@Injectable()
export class LocationService {

  constructor() { }

  getLocations(): Observable<Location[]> {
    return of(LOCATIONS_MOCK);
  }

  getLocation(id: number): Observable<Location> {
    for (let location of LOCATIONS_MOCK) {
      if (location.id == id) {
        return of(location);
      }
    }
    return of(null);
  }
}
