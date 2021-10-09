import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public menu = [
    {label:'OBRAS', icon:'fas fa-building', router:'/obra'},
    {label:'VER OBRAS', icon:'fas fa-city', router:'/lista'},
    {label:'ORÇAMENTOS', icon:'fas fa-wallet', router:'/orcamento'},
    {label:'COLABORADORES', icon:'fas fa-users', router:'/colaboradores'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
