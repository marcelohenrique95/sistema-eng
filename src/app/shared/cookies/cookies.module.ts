import { CookiesComponent } from './cookies.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CookiesComponent],
  imports: [CommonModule],
  exports: [CookiesComponent]
})
export class CookiesModule { }
