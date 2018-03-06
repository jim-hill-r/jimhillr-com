import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Term } from '../model/term';
import { TerminologyService } from '../services/terminology-service';

@Component({
  selector: 'terminology',
  templateUrl: './terminology.component.html',
  styleUrls: ['./terminology.component.css']
})
export class TerminologyComponent {

  constructor(private terminologyService: TerminologyService) { }

  terms: Term[];
  termOfTheDay: Term;

  ngOnInit() {
    this.getTerms();
  }

  getTerms(): void {
    this.terminologyService.getTerms().subscribe(terms => {
      this.terms = terms;
      this.termOfTheDay = terms[Math.floor((Math.random() * this.terms.length))];
    }
    );
  }

}
