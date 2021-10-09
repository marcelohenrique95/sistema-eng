import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public menu = [
    {label:'OBRAS', icon:'fas fa-building'},
    {label:'VER OBRAS', icon:'fas fa-city'},
    {label:'ORÇAMENTOS', icon:'fas fa-wallet'},
    {label:'COLABORADORES', icon:'fas fa-users'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
