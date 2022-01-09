import { ColaboradorComponent } from './modules/colaborador/colaborador.component';
import { HomeComponent } from './modules/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    loadChildren: () => import("src/app/modules/obra/obras.module").then((m) => m.ObrasModule),
  },
  {
    path: 'colaboradores',
    component: ColaboradorComponent
  },
  {
    path: 'parceiros',
    loadChildren: () => import("src/app/modules/parceiros/parceiros.module").then((m) => m.ParceirosModule),
  },
  {
    path: 'sobre-nos',
    loadChildren: () => import("src/app/modules/sobre-nos/sobre-nos.module").then((m) => m.SobreNosModule),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
