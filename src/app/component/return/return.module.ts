import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReturnComponent } from './return.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ReturnComponent],
  exports: [ReturnComponent]
})
export class ReturnModule { }
