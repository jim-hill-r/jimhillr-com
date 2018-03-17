import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Climber } from '../model/climber';
import { LIKELY_FRIENDS } from '../../mocks/friend-mock';

@Injectable()
export class FriendsService {

  constructor() { }

  getLikelyFriends(): Observable<Climber[]> {
    return of(LIKELY_FRIENDS);
  }
}
