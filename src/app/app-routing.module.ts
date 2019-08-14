import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
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
  { path: '**', component: NotFoundComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
