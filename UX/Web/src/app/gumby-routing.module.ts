import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
  { path: 'friends', loadChildren: './friends/friends.module#FriendsModule' },
  { path: 'events', loadChildren: './events/events.module#EventsModule' },
  { path: 'routes', loadChildren: './routes/routes.module#RoutesModule' },
  { path: 'locations', loadChildren: './locations/locations.module#LocationsModule' },
  { path: 'terminology', loadChildren: './terminology/terminology.module#TerminologyModule' },
  { path: 'download', loadChildren: './download/download.module#DownloadModule' },
  { path: '**', loadChildren: './notfound/notfound.module#NotFoundModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class GumbyRoutingModule { }
