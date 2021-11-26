import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from '../lista/lista.component';
import { CardComponent } from '../card/card.component';
import { ModalComponent } from '../modal/modal.component';



@NgModule({
  declarations: [
    ListaComponent, 
    CardComponent, 
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaComponent, 
    CardComponent, 
    ModalComponent
  ]
})
export class SharedModule { }
