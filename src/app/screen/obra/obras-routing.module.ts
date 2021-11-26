import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import { ObrasComponent } from './obras.component';
import { VerObraComponent } from './ver-obra/ver-obra.component';

const routes: Routes = [
  {
    path: '',
    component: ObrasComponent,
    pathMatch: 'full',
    children: [
      {
        path: 'listar-obras',
        component: VerObraComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObrasRoutingModule { }
