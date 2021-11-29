import { ContentHomeComponent } from './content-home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContentHomeComponent],
  exports: [ContentHomeComponent]
})
export class ContentHomeModule { }
