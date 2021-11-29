import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {
  public showCookie: boolean;
  public cookieName: string;

  constructor(private cookieService: CookieService) {
    this.showCookie = true;
    this.cookieName = 'mhstecnologia-cookie'
   }

  ngOnInit() {
    if(this.cookieService.get(this.cookieName) === '1') {
      this.showCookie = false;
    }
  }

  aceptCookie() {
    this.cookieService.set(this.cookieName ,"1", 364);
    this.showCookie = false;
  }

}
