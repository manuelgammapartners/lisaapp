import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './_pages/init/init.component';
import { HomeComponent } from './_pages/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: InitComponent,
    children: [
      { path: 'home', component: HomeComponent },
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
