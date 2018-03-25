import { ActivityDetail } from './activityDetail';

export class Activity {
  id: number;
  timestamp: Date;  
  comments: string;
  details: ActivityDetail[];
}
