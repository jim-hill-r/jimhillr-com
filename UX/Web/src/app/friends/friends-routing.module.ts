import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FriendsComponent } from './components/friends.component';


const routes: Routes = [
  {
    path: '',
    component: FriendsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendsRoutingModule { }
