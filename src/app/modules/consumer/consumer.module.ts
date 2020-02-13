import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumerRoutingModule } from './consumer-routing.module';
import { InitComponent } from './_pages/init/init.component';
import { ConsumerTopBar } from './_components/top-bar/consumer-top-bar.component';

import { ConsumerSideBarComponent } from './_components/consumer-side-bar/consumer-side-bar.component';


@NgModule({
  declarations: [InitComponent, ConsumerTopBar, ConsumerSideBarComponent],
  imports: [
    CommonModule,
    ConsumerRoutingModule
  ]
})
export class ConsumerModule { }
