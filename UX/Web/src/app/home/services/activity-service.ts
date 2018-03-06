import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Activity } from '../model/activity';
import { ACTIVITIES_MOCK } from '../model/mocks/activity-mock';

@Injectable()
export class ActivityService {

  constructor() { }

  getActivities(): Observable<Activity[]> {
    return of(ACTIVITIES_MOCK);
  }
}
