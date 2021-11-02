import { ColaboradorModule } from './screen/colaborador/colaborador.module';
import { ObrasModule } from './screen/obra/obras.module';
import { RouterModule } from '@angular/router';
import { NavbarModule } from './component/navbar/navbar.module';
import { FooterModule } from './component/footer/footer.module';
import { HeaderModule } from './component/header/header.module';
import { HomeModule } from './screen/home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CookiesModule } from './component/cookies/cookies.module';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    RouterModule,
    HeaderModule,
    NavbarModule,
    FooterModule,
    ObrasModule,
    ColaboradorModule,
    CookiesModule,
    HomeModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
