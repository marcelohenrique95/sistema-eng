import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.scss']
})
export class ObrasComponent implements OnInit {
  public button_options= [
    {label:'CRIAR OBRA', icon:'fas fa-plus' , router:'/criar-obra'},
    {label:'VER OBRAS', icon:'far fa-eye' , router:'/listar-obra'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
