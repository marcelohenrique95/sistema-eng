import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { menuOptions } from 'src/app/config/static/menu-options';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public menuItem = menuOptions;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goNextPage(route: string): void {
    this.router.navigate(['/' + route]);
  }
}
