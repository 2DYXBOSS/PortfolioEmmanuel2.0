import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SiteVisitsChartModule } from './views/components/admin-page/admin-components/site-visits-chart/site-visits-chart.module';
// import { AdmindashModule } from './views/components/admindash/admindash.module';
// import { AdministratorModule } from './views/components/administrator/administrator.module';
import { HttpClientModule } from '@angular/common/http';
import { SafeUrlPipe } from './views/shared/pipes/safe-url.pipe';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,  // Gardez BrowserModule ici
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SiteVisitsChartModule,
    NgxChartsModule,
    
    // AdmindashModule,
    // AdministratorModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }







