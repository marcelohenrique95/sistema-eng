import { ReturnModule } from './../../component/return/return.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObrasComponent } from './obras.component';
import { CriaObraComponent } from './cria-obra/cria-obra.component';
import { VerObraComponent } from './ver-obra/ver-obra.component';
import { ObrasRoutingModule } from './obras-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { MenuObraComponent } from './menu-obra/menu-obra.component';

@NgModule({
  imports: [
    ObrasRoutingModule,
    CommonModule,
    RouterModule,
    ReturnModule,
    SharedModule
  ],
  declarations: [
    ObrasComponent, 
    CriaObraComponent, 
    VerObraComponent, MenuObraComponent
  ]
})
export class ObrasModule { }
