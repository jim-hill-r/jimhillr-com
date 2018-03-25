import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Activity } from '../../model/activity';
import { ActivityService } from '../../services/activity-service';

@Component({
  selector: 'home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent {

  constructor(
    private activityService: ActivityService
  ) { }

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

}
