import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  @Input() lista: any;

  listaTest = [
    {nome: 'Marcelo Henrique', idade: '25', cargo: 'TI', email: 'marcelohenrique8061@gmail.com'},
    {nome: 'De Arrascaeta', idade: '22', cargo: 'Engenheiro', email: 'arrasca@gmail.com'},
    {nome: 'Diego Alves', idade: '35', cargo: 'Gerente', email: 'diegoalvesgol@gmail.com'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
