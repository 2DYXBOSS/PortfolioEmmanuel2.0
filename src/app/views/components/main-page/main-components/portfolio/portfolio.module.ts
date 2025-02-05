import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { SkillsModule } from "../skills/skills.module";



@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    SkillsModule
],
  exports: [
    PortfolioComponent
  ]
})
export class PortfolioModule { }
