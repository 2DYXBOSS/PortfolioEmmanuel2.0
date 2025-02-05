import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationsComponent } from './recommendations.component';



@NgModule({
  declarations: [
    RecommendationsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RecommendationsComponent
  ]
})
export class RecommendationsModule { }
