import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-obra',
  templateUrl: './menu-obra.component.html',
  styleUrls: ['./menu-obra.component.scss'],
})
export class MenuObraComponent implements OnInit {
  public button_options = [
    { label: 'CRIAR OBRA', icon: 'fas fa-plus', router: 'criar-obra' },
    { label: 'VER OBRAS', icon: 'far fa-eye', router: 'listar-obras' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  goNextPage(route: string): void {
    this.router.navigate(['/' + route]);
  }
}
