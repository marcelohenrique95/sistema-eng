import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { listaFuncionarios } from 'src/app/config/static/lista-pessoas';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  @Input() lista: any;

  public titleList: string;

  constructor(private router: Router) {
    this.titleList = '';
  }

  ngOnInit(): void {
    this.checkRota();
  }

  checkRota(){
    const str = 'colaboradores';
    const url = this.router.url;
    if(url.includes(str)) {
      this.titleList = 'FUNCIONÁRIOS';
    } else {
      this.titleList = 'OBRAS';
    }

  }
}
