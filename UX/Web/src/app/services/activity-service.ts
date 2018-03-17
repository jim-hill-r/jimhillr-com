import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Activity } from '../model/activity';
import { ACTIVITIES_MOCK } from '../../mocks/activity-mock';

@Injectable()
export class ActivityService {

  constructor() { }

  createActivity(): Observable<Activity> {
    let newActivity = new Activity();
    newActivity.timestamp = new Date();
    return of(newActivity);
  }

  getActivities(): Observable<Activity[]> {
    return of(ACTIVITIES_MOCK);
  }
}
