import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-home',
  templateUrl: './content-home.component.html',
  styleUrls: ['./content-home.component.scss']
})
export class ContentHomeComponent implements OnInit {
  public avisos = [
    {title:'Alteração de fornecedor', label:'Foi alterado o fornecedor de tijolos', date: '15/10/2021'},
    {title:'Promoção de funcionario', label:'O nosso auxiliar de pedreiro foi promovido a Pedreiro', date: '27/11/2021'},
    {title:'Ponto facultativo', label:'Dia 07 e 08 estão dispensados', date: '06/10/2021'},
    {title:'Vale refeição', label:'O valor do vale refeiçao foi reajustado em 10%', date: '20/10/2021'},
    {title:'Vale refeição', label:'O valor do vale refeiçao foi reajustado em 10%', date: '20/10/2021'},
    {title:'Vale refeição', label:'O valor do vale refeiçao foi reajustado em 10%', date: '20/10/2021'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
