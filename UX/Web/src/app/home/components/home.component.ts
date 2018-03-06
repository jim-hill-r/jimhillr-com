import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Activity } from '../model/activity';
import { ActivityService } from '../services/activity-service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private activityService: ActivityService) { }

  activities: Activity[];

  ngOnInit() {
    this.getActivities();
  }

  getActivities(): void {
    this.activityService.getActivities().subscribe(activities => {
      this.activities = activities;
    }
    );
  }

  addClimb(): void {
    let activity = new Activity();
    activity.timestamp = new Date();
    this.activities.reverse();
    this.activities.push(activity);
    this.activities.reverse();
  }

}
