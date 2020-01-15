import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { DetailTribeComponent } from './modules/general/detail-tribe/detail-tribe.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  {
    path: 'login',
    loadChildren: './modules/application/login/login.module#LoginModule'
  },
  {
    path: 'items',
    loadChildren: './modules/application/items/items.module#ItemsModule',
  },
  {
    path: 'about',
    loadChildren: './modules/general/about/about.module#AboutModule',
  },
  {
    path: 'members',
    loadChildren: './modules/general/members/members.module#MembersModule',
  },
  { path: 'tribe/:id', component: DetailTribeComponent },
  { path: '**', component: NotFoundComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
