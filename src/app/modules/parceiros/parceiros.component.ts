import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.scss']
})
export class ParceirosComponent implements OnInit {

  public title: string;

  constructor() {
    this.title = 'Parceiros';
   }

  ngOnInit(): void {
  }

}
