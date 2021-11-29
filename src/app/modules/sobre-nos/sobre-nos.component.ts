import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.scss']
})
export class SobreNosComponent implements OnInit {

  titleSobre = 'Sobre o Sistema Eng Controle'

  constructor() { }

  ngOnInit(): void {
  }

}
