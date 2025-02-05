import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from 'src/app/views/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AboutModule } from "../main-components/about/about.module";
import { ExperienceModule } from "../main-components/experience/experience.module";
import { FormationModule } from "../main-components/formation/formation.module";
import { PortfolioModule } from "../main-components/portfolio/portfolio.module";
import { RecommendationsModule } from '../main-components/recommendations/recommendations.module';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  
];


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    AboutModule,
    ExperienceModule,
    FormationModule,
    PortfolioModule,
    RecommendationsModule
]


  
})
export class HomePageModule { }
