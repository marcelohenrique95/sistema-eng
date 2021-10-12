import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.scss']
})
export class ColaboradorComponent implements OnInit {

  public listFunc = [
    {nome: "Marcelo H", tel: "65 981031406", email:"marcelohenrique8061@gmail.com", funcao:"Auxiliar de Obra"},
    {nome: "Bruno", tel: "69 92723825", email:"bruno__@hotmail.com", funcao:"Engenheiro"},
    {nome: "Karol", tel: "00 00000000", email:"karol@teste.com", funcao:"Secretaria"},
    {nome: "Gustavo", tel: "00 00000000", email:"gustavo@teste.com", funcao:"Limpeza"},
    {nome: "Carlos G", tel: "00 00000000", email:"carlos@teste.com", funcao:"Pedreiro"},
    {nome: "Arrascaeta", tel: "00 00000000", email:"arraxca@teste.com", funcao:"CEO"},
    {nome: "Gabriel B", tel: "00 00000000", email:"gab@teste.com", funcao:"Auxiliar Escritorio"},
    {nome: "Claudia S", tel: "00 00000000", email:"clauda_s@teste.com", funcao:"Chefe RH"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
