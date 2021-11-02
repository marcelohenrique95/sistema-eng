import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {
  public showCookie: boolean;

  constructor(private cookieService: CookieService) {
    this.showCookie = true;
   }

  ngOnInit() {
    this.cookieService.check("cookie");
  }

  aceptCookie() {
    console.log('entrou no aceptd' + this.showCookie);
    this.cookieService.set("cookie" ,"sistema-eng-mhs-tec", 364);
    this.showCookie = false;
  }

}
