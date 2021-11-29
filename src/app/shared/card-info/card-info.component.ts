import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {

  @Input() title;

  helpTest = ['Como criar um orçamento', 'Como excluir um orçamento'];

  constructor() {
    this.title = '';
   }
  ngOnInit(): void {
  }

}
