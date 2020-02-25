import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './_pages/init/init.component';

import { UpcomingApptsComponent } from './_components/upcoming-appts/upcoming-appts.component';
import { HomeComponent } from './_pages/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: InitComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'upcoming-appointments', component: UpcomingApptsComponent },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumerRoutingModule { }
