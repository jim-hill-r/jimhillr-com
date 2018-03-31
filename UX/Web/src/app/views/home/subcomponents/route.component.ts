import { Component, Input } from '@angular/core';
import { Route } from '../../../model/route';
import { Location } from '../../../model/location';
import { LocationService } from '../../../services/location-service';
import { RouteService } from '../../../services/route-service';

@Component({
  selector: 'route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent {

  constructor(
    private routeService: RouteService,
    private locationService: LocationService
  ) {}

  public route: Route;
  public location: Location;

  @Input() edit: boolean = false;

  @Input('id')
  set id(id: number) {
    this.getRoute(id);
  }
  
  private getRoute(id: number): void {
    this.routeService.getRoute(id).subscribe(route => {
      this.route = route;
      this.getLocation(this.route.location);
    }
    );
  }

  private getLocation(id: number): void {
    this.locationService.getLocation(id).subscribe(location => {
      this.location = location;
    })
  }
 
}
