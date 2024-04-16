import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { FlatButtonComponent } from './components/buttons/flat-button/flat-button.component';
import { LogoComponent } from './components/logo/logo.component';
import { ShortSummaryComponent } from './views/dashboard/components/short-summary/short-summary.component';
import { PlotActionsComponent } from './views/dashboard/components/plot-actions/plot-actions.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TextfieldComponent } from './components/inputs/textfield/textfield.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ShortSummaryComponent,
    PlotActionsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    LogoComponent,
    AppRoutingModule,
    FlatButtonComponent,
    CarouselComponent,
    TextfieldComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
