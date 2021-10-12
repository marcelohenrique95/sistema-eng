import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public menu = [
    {label:'INÍCIO', icon:'fas fa-home', router:'/home'},
    {label:'OBRAS', icon:'fas fa-city', router:'/obra'},
    {label:'ETAPAS DA OBRA', icon:'fas fa-tasks', router:'/etapas'},
    {label:'ORÇAMENTOS', icon:'fas fa-wallet', router:'/orcamento'},
    {label:'COLABORADORES', icon:'fas fa-users', router:'/colaboradores'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
