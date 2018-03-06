import { Component } from '@angular/core';

@Component({
  selector: 'gumby',
  templateUrl: './gumby.component.html',
  styleUrls: ['./gumby.component.css']
})
export class GumbyComponent {

  public menuItems: MenuItem[] = [
    { title: 'Home', url: '/', icon: 'home' },
    { title: 'Profile', url: '/profile', icon: 'face' },
    { title: 'Friends', url: '/friends', icon: 'spa' },
    { title: 'Events', url: '/events', icon: 'event'},
    { title: 'Routes', url: '/routes', icon: 'terrain' },
    { title: 'Locations', url: '/locations', icon: 'store' },
    { title: 'Terminology', url: '/terminology', icon: 'book' },
    { title: 'Download App', url: '/download', icon: 'file_download'}
  ];
  public activeMenuItem: MenuItem = this.menuItems[0];

  public changeSection(menuItem: MenuItem) {
    this.activeMenuItem = menuItem;
  }
}

class MenuItem {
  public title: string;
  public url: string;
  public icon: string;
}
