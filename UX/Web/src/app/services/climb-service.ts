import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Climb } from '../model/climb';
import { CLIMBS_MOCK } from '../../mocks/climb-mock';

@Injectable()
export class ClimbService {

  constructor() { }

  createClimb(): Observable<Climb> {
    let newClimb = new Climb();
    return of(newClimb);
  }

  getClimbs(): Observable<Climb[]> {
    return of(CLIMBS_MOCK);
  }

  getClimb(id: number): Observable<Climb> {
    for (let climb of CLIMBS_MOCK) {
      if (climb.id == id) {
        return of(climb);
      }
    }
    return of(null);
  }
}
