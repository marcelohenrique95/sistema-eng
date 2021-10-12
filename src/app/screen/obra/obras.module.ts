import { ReturnModule } from './../../component/return/return.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObrasComponent } from './obras.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReturnModule
  ],
  declarations: [ObrasComponent],
  exports: [ObrasComponent]
})
export class ObrasModule { }
