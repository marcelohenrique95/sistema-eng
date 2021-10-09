import { ContentHomeModule } from './../../component/content-home/content-home.module';
import { CookiesModule } from './../../component/cookies/cookies.module';
import { NavbarModule } from './../../component/navbar/navbar.module';
import { FooterModule } from './../../component/footer/footer.module';
import { HeaderModule } from './../../component/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    NavbarModule,
    CookiesModule,
    ContentHomeModule
   ],
  declarations: [ HomeComponent ],
  exports: [ HomeComponent]
})
export class HomeModule { }
