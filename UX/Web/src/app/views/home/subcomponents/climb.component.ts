import { Component, Input } from '@angular/core';
import { Climb } from '../../../model/climb';
import { Climber } from '../../../model/climber';
import { ClimbService } from '../../../services/climb-service';
import { ClimberService } from '../../../services/climber-service';

@Component({
  selector: 'climb',
  templateUrl: './climb.component.html',
  styleUrls: ['./climb.component.css']
})
export class ClimbComponent {

  constructor(
    private climbService: ClimbService,
    private climberService: ClimberService
  ) {}

  private climb: Climb;
  private climber: Climber;
  private belayer: Climber;
  private friends: Climber[];

  @Input() edit: boolean = false;

  @Input('id')
  set id(id: number) {
    this.getClimb(id);
  }

  ngOnInit() {
    this.getFriends();
  }
  
  private getClimb(id: number): void {
    this.climbService.getClimb(id).subscribe(climb => {
      this.climb = climb;
      this.getBelayer(this.climb.belayer);
      this.getClimber(this.climb.climber);
    }
    );
  }

  private getBelayer(id: number): void {
    this.climberService.getClimber(id).subscribe(belayer => {
      this.belayer = belayer;
    })
  }

  private getClimber(id: number): void {
    this.climberService.getClimber(id).subscribe(climber => {
      this.climber = climber;
    })
  }
  
  private getFriends(): void {
    this.climberService.getClimbers().subscribe(friends => {
      this.friends = friends;
    }
    );
  }




}
