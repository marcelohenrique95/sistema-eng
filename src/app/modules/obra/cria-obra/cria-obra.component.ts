import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cria-obra',
  templateUrl: './cria-obra.component.html',
  styleUrls: ['./cria-obra.component.scss']
})
export class CriaObraComponent implements OnInit {

  public titlePage: string;

  constructor() {
    this.titlePage = 'Cadastrar obra';
   }

  ngOnInit(): void {
  }

}
