import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-obra',
  templateUrl: './ver-obra.component.html',
  styleUrls: ['./ver-obra.component.scss']
})
export class VerObraComponent implements OnInit {

  listaObras = [
    {tipo:'Sobrado', fase:'Acabamento', dataIni:'02/09/2020', dataFimPrevista:'05/02/2022'},
    {tipo:'Casa', fase:'Telhado', dataIni:'22/01/2021', dataFimPrevista:'17/11/2022'},
    {tipo:'Casa', fase:'Acabamento', dataIni:'13/03/2021', dataFimPrevista:'25/09/2022'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
