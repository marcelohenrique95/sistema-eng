import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreNosRoutingModule } from './sobre-nos-routing.module';
import { SobreNosComponent } from './sobre-nos.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [SobreNosComponent],
  imports: [
    CommonModule,
    SobreNosRoutingModule,
    SharedModule
  ]
})
export class SobreNosModule { }
