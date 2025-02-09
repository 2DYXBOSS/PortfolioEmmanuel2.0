import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { AdminRoutingComponent } from './admin-routing/admin-routing.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SafeUrlPipe,
    AdminRoutingComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SafeUrlPipe,
    AdminRoutingComponent
  ]
})
export class SharedModule { }
