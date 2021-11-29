import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CookiesComponent } from './cookies/cookies.component';
import { ReturnComponent } from './return/return.component';
import { ContentHomeComponent } from './content-home/content-home.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { RouterModule } from '@angular/router';
import { CardInfoComponent } from './card-info/card-info.component';



@NgModule({
  declarations: [
    ListaComponent, 
    CardComponent, 
    ModalComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    CookiesComponent,
    ReturnComponent,
    ContentHomeComponent,
    PageErrorComponent,
    CardInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListaComponent, 
    CardComponent, 
    ModalComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    CookiesComponent,
    ReturnComponent,
    ContentHomeComponent,
    PageErrorComponent,
    CardInfoComponent
  ]
})
export class SharedModule { }
