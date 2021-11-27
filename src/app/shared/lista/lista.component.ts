import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  @Input() lista: any;

  title = 'FUNCIONÁRIOS';

  listaTest = [
    {
      nome: 'Marcelo Henrique',
      idade: '25',
      cargo: 'TI',
      email: 'marcelohenrique8061@gmail.com',
      photo: 'https://exame.com/wp-content/uploads/2021/02/bill.jpg',
    },
    {
      nome: 'De Arrascaeta',
      idade: '22',
      cargo: 'Engenheiro',
      email: 'arrasca@gmail.com',
      photo:
        'https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2021/11/arrascaeta-certa.jpg',
    },
    {
      nome: 'Diego Alves',
      idade: '35',
      cargo: 'Gerente',
      email: 'diegoalvesgol@gmail.com',
      photo: 'https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2021/09/flamengo-01-diego-alves-508x338.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
