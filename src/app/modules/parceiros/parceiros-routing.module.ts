import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParceirosComponent } from './parceiros.component';

const routes: Routes = [
  {
    path: '',
    component: ParceirosComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParceirosRoutingModule { }
