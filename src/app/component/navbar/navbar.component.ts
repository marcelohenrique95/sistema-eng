import { Component, OnInit } from '@angular/core';

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

  public menu = [
    {label:'INÍCIO', icon:'fas fa-home', router:'/home'},
    {label:'OBRAS', icon:'fas fa-city', router:'/obra'},
    {label:'ETAPAS DA OBRA', icon:'fas fa-tasks', router:'/etapas'},
    {label:'ORÇAMENTOS', icon:'fas fa-wallet', router:'/orcamento'},
    {label:'COLABORADORES', icon:'fas fa-users', router:'/colaboradores'},
    {label:'PARCEIROS', icon:'fas fa-handshake', router:'/parceiros'},
    {label:'SOBRE NÓS', icon:'fas fa-info-circle', router:'/info'},
    {label:'SAIR', icon:'fas fa-sign-out-alt', router:'/login'},
  ]

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
