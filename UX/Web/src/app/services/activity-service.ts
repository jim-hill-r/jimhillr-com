import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Activity } from '../model/activity';
import { ACTIVITIES_MOCK } from '../../mocks/activity-mock';

@Injectable()
export class ActivityService {

  constructor() { }

  saveActivity(activity: Activity): Observable<Activity> {
    let newActivity = activity;
    newActivity.timestamp = new Date();
    ACTIVITIES_MOCK.splice(0, 0, newActivity);
    return of(newActivity);
  }

  getActivities(): Observable<Activity[]> {
    return of(ACTIVITIES_MOCK);
  }
}
