import { Component, OnInit } from '@angular/core';
import { menuOptions } from 'src/app/config/static/menu-options';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public interval: any;
  public time: number;
  public minutes: number;
  public seconds: number;

  public menu = menuOptions

  constructor() {
    this.interval;
    this.time = 0;
    this.minutes = 0;
    this.seconds = 0;
   }

  ngOnInit() {
    this.startClock()
  }

  public startClock(): void{
    this.interval = setInterval(() => {
      if(this.time === 0) {
        this.time++;
        this.seconds++;
      } else {
        this.time++;
        this.seconds++;
        if(this.seconds > 60) {
          this.seconds = 0;
        }
      }
      this.transformMinutes(this.time);
    }, 1000)
  }

  public transformMinutes(value: number): string {
    this.minutes = Math.floor(value / 60);
    return this.minutes.toString();
  }

  public resetClock(): void {
    clearInterval(this.interval);
    this.time = 0;
    this.seconds = 0;
  }
}
