import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePreviewComponent } from './phone-preview.component';
import { SharedModule } from 'src/app/views/shared/shared.module';



@NgModule({
  declarations: [
    PhonePreviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PhonePreviewComponent
  ]
})
export class PhonePreviewModule { }
