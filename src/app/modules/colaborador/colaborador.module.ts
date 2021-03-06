import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradorComponent } from './colaborador.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ColaboradorComponent],
  exports:[ColaboradorComponent]
})
export class ColaboradorModule { }
