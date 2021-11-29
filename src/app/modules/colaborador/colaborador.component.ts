import { Component, OnInit } from '@angular/core';
import { listaFuncionarios } from 'src/app/config/static/lista-pessoas';

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.scss']
})
export class ColaboradorComponent implements OnInit {

  listaColaboradores = listaFuncionarios;

  constructor() { }

  ngOnInit() {
  }

}
