import { ReturnModule } from './../../component/return/return.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradorComponent } from './colaborador.component';

@NgModule({
  imports: [
    CommonModule,
    ReturnModule
  ],
  declarations: [ColaboradorComponent],
  exports:[ColaboradorComponent]
})
export class ColaboradorModule { }
