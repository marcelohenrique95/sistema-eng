import { ColaboradorModule } from './modules/colaborador/colaborador.module';
import { ObrasModule } from './modules/obra/obras.module';
import { HomeModule } from './modules/home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { SobreNosModule } from './modules/sobre-nos/sobre-nos.module';
import { ParceirosComponent } from './modules/parceiros/parceiros.component';

@NgModule({
  declarations: [
    AppComponent,
    ParceirosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    ObrasModule,
    ColaboradorModule,
    HomeModule,
    SobreNosModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
