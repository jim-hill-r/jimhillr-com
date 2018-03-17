import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './views/home/home.module#HomeModule' },
  { path: 'profile', loadChildren: './views/profile/profile.module#ProfileModule' },
  { path: 'friends', loadChildren: './views/friends/friends.module#FriendsModule' },
  { path: 'events', loadChildren: './views/events/events.module#EventsModule' },
  { path: 'routes', loadChildren: './views/routes/routes.module#RoutesModule' },
  { path: 'locations', loadChildren: './views/locations/locations.module#LocationsModule' },
  { path: 'terminology', loadChildren: './views/terminology/terminology.module#TerminologyModule' },
  { path: 'rating', loadChildren: './views/rating/rating.module#RatingModule' },
  { path: 'download', loadChildren: './views/download/download.module#DownloadModule' },
  { path: '**', loadChildren: './views/notfound/notfound.module#NotFoundModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class GumbyRoutingModule { }
