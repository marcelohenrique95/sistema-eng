import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParceirosRoutingModule } from './parceiros-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ParceirosRoutingModule,
    SharedModule
  ]
})
export class ParceirosModule { }
