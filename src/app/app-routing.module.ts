import { ColaboradorComponent } from './screen/colaborador/colaborador.component';
import { PageErrorComponent } from './component/page-error/page-error.component';
import { ObrasComponent } from './screen/obra/obras.component';
import { HomeComponent } from './screen/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriaObraComponent } from './screen/obra/cria-obra/cria-obra.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'obra',
    loadChildren: () => import("src/app/screen/obra/obras.module").then((m) => m.ObrasModule),
  },
  {
    path: 'colaboradores',
    component: ColaboradorComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
