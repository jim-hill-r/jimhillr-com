import { Component } from '@angular/core';

@Component({
  selector: 'gumby',
  templateUrl: './gumby.component.html',
  styleUrls: ['./gumby.component.css']
})
export class GumbyComponent {

  private menuItems: MenuItem[] = [
    { title: 'Home', url: '/', icon: 'home' },
    { title: 'Profile', url: '/profile', icon: 'face' },
    { title: 'Friends', url: '/friends', icon: 'spa' },
    { title: 'Routes', url: '/routes', icon: 'terrain' },
    { title: 'Locations', url: '/locations', icon: 'store' },
    { title: 'Terminology', url: '/terminology', icon: 'book' },
    { title: 'Download App', url: '/download', icon: 'file_download'}
  ];
  private activeMenuItem: MenuItem = this.menuItems[0];

  private changeSection(menuItem: MenuItem) {
    this.activeMenuItem = menuItem;
  }
}

class MenuItem {
  public title: string;
  public url: string;
  public icon: string;
}
