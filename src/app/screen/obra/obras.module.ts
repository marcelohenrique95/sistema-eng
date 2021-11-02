import { ReturnModule } from './../../component/return/return.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObrasComponent } from './obras.component';
import { CriaObraComponent } from './cria-obra/cria-obra.component';
import { VerObraComponent } from './ver-obra/ver-obra.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReturnModule
  ],
  declarations: [ObrasComponent, CriaObraComponent, VerObraComponent],
  exports: [ObrasComponent]
})
export class ObrasModule { }
