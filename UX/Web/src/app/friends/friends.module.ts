import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsRoutingModule } from './friends-routing.module';
import { FriendsComponent } from './components/friends.component';

@NgModule({
  imports: [
    CommonModule,
    FriendsRoutingModule
  ],
  declarations: [ FriendsComponent ]
})
export class FriendsModule { }
