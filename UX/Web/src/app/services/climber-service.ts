import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Climber } from '../model/climber';
import { CLIMBERS_MOCK } from '../../mocks/climber-mock';

@Injectable()
export class ClimberService {

  constructor() { }

  getClimbers(): Observable<Climber[]> {
    return of(CLIMBERS_MOCK);
  }

  getClimber(id: number): Observable<Climber> {
    for (let climber of CLIMBERS_MOCK) {
      if (climber.id == id) {
        return of(climber);
      }
    }
    return of(null);
  }
}
