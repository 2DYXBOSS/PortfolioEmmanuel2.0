import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutingComponent } from './views/shared/admin-routing/admin-routing.component';
import { DownloadCvComponent } from './views/components/admin-page/home-page/download-cv/download-cv.component';
import { MessagesComponent } from './views/components/admin-page/home-page/messages/messages.component';
import { HomeComponent } from './views/components/admin-page/home-page/home/home.component';
import { VisitorComponent } from './views/components/admin-page/home-page/visitor/visitor.component';
import { ProfilComponent } from './views/components/admin-page/home-page/profil/profil.component';
import { FormationComponent } from './views/components/main-page/main-components/formation/formation.component';
import { ProjectComponent } from './views/components/admin-page/home-page/portfolio-page/project/project.component';
import { ExperienceComponent } from './views/components/main-page/main-components/experience/experience.component';


const routes: Routes = [
  {
    path: 'portfolio',
    loadChildren: () => import('./views/components/main-page/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'admin',
    component: AdminRoutingComponent,
    children: [
      { path: 'about', component: AdminRoutingComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'projet', component: ProjectComponent },
      { path: 'formation', component: FormationComponent },
      { path: 'profile', component: ProfilComponent },
      { path: 'visteurs', component: VisitorComponent },
      { path: 'messages', component: MessagesComponent }, 
      { path: 'cvlist', component: DownloadCvComponent } ,
      { path: 'home', component: HomeComponent }
    ]
  },
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




