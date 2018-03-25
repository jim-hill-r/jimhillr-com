import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Route } from '../model/route';
import { ROUTES_MOCK } from '../../mocks/route-mock';

@Injectable()
export class RouteService {

  constructor() { }

  getRoutes(): Observable<Route[]> {
    return of(ROUTES_MOCK);
  }

  getRoute(id: number): Observable<Route> {
    for (let route of ROUTES_MOCK) {
      if (route.id == id) {
        return of(route);
      }
    }
    return of(null);
  }
}
