import { Component, Input } from '@angular/core';
import { Activity } from '../../../model/activity';

@Component({
  selector: 'activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {

  constructor() {

  }
  @Input() activity: Activity;


}
