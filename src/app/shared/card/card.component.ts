import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitlePageEnum } from 'src/app/config/enum/title-page';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public titleCard: string;

  constructor(private router: Router) {
    this.titleCard = '';
   }

  ngOnInit(): void {
    this.checkRota();
  }

  checkRota(): void{
    const str = 'parceiros';
    const url = this.router.url;
    if(url.includes(str)) {
      this.titleCard = TitlePageEnum.PARCEIROS;
    } else {
      this.titleCard = TitlePageEnum.NOTFOUND;
    }
  }

}
