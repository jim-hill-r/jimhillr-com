import { Component, Input } from '@angular/core';
import { Activity } from '../../../model/activity';
import { ActivityService } from '../../../services/activity-service';

@Component({
  selector: 'activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {

  constructor(private activityService: ActivityService) {

  }

  @Input() activity: Activity = new Activity();
  @Input() edit: boolean = false;

  saveActivity(): void {  
    this.activityService.saveActivity(this.activity).subscribe(activity => this.activity = activity);
  }

}
