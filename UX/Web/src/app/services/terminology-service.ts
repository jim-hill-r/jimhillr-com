import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Term } from '../model/term';
import { TERMS_MOCK } from '../../mocks/term-mock';

@Injectable()
export class TerminologyService {

  constructor() { }

  getTerms(): Observable<Term[]> {
    return of(TERMS_MOCK);
  }
}
