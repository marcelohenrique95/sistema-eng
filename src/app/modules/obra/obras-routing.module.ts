import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriaObraComponent } from './cria-obra/cria-obra.component';
import { MenuObraComponent } from './menu-obra/menu-obra.component';
import { ObrasComponent } from './obras.component';
import { VerObraComponent } from './ver-obra/ver-obra.component';

const routes: Routes = [
  {
    path: '',
    component: ObrasComponent,
    children: [
      {
        path: '',
        component: MenuObraComponent
      },
      {
        path: 'listar-obras',
        component: VerObraComponent
      },
      {
        path: 'criar-obra',
        component: CriaObraComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObrasRoutingModule { }
