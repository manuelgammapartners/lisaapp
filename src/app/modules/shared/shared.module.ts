import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './_components/alert/alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    FormsModule, ReactiveFormsModule
  ]
})
export class SharedModule { }
