import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './_components/alert/alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from './_components/breadcrumbs/breadcrumbs.component';



@NgModule({
  declarations: [AlertComponent, BreadcrumbsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    FormsModule, ReactiveFormsModule,BreadcrumbsComponent
  ]
})
export class SharedModule { }
