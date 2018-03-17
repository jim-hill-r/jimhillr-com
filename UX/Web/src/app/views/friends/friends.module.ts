import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsRoutingModule } from './friends-routing.module';
import { FriendsViewComponent } from './friends-view.component';

@NgModule({
  imports: [
    CommonModule,
    FriendsRoutingModule
  ],
  declarations: [ FriendsViewComponent ]
})
export class FriendsModule { }
