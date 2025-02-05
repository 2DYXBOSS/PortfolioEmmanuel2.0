import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'portfolio',
    loadChildren: () => import('./views/components/main-page/home-page/home-page.module').then(m => m.HomePageModule)
  },
  // {
  //   path: 'admin',
  //   component:AdminrouterComponent,
  //   children: [
  //     { path: 'apropos', component: AdministratorComponent },
  //     { path: 'experience', component: AdminaddexperienceComponent },
  //     { path: 'projet', component: ProjetsComponent },
  //     { path: 'formation', component: AdminaddformationComponent },
  //     { path: 'profile', component: AdminprofilComponent },
  //     { path: 'visteurs', component: AdminvisitorComponent },
  //     { path: 'messages', component: MessagesComponent } ,
  //     { path: 'cvlist', component: AdmincvComponent } ,
  //     { path: 'home', component: AdmindashComponent }
  //   ]
  // },
  {
    path: '',
    redirectTo: '/portfolio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




