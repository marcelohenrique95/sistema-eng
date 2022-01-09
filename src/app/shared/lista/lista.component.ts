import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitlePageEnum } from 'src/app/config/enum/title-page';

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

  checkRota(): void{
    const str = 'colaboradores';
    const url = this.router.url;
    if(url.includes(str)) {
      this.titleList = TitlePageEnum.COLABORADORES;
    } else {
      this.titleList = TitlePageEnum.OBRAS;
    }
  }
  
}
