import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './_pages/init/init.component';


const routes: Routes = [
  {
    path: '',
    component: InitComponent
  },
  {
    path: 'consumer',
    loadChildren: () => import('./../consumer/consumer.module').then(m => m.ConsumerModule)
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
