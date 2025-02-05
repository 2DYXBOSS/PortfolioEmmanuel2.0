import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from '../skills/skills.component';
import { PhonePreviewModule } from '../phone-preview/phone-preview.module';



@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    CommonModule,
    PhonePreviewModule
  ],
  exports: [
    SkillsComponent
  ]
})
export class SkillsModule { }
