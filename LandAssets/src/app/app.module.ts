import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { FlatButtonComponent } from './components/buttons/flat-button/flat-button.component';
import { LogoComponent } from './components/logo/logo.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TextfieldComponent } from './components/inputs/textfield/textfield.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { SelectComponent } from './components/inputs/select/select.component';
import { CadastroEstadoComponent } from './modules/cadastro-estado/cadastro-estado.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CadastroEstadoComponent,
  ],
  imports: [
    SelectComponent,
    DashboardModule,
    BrowserAnimationsModule,
    BrowserModule,
    LogoComponent,
    AppRoutingModule,
    HttpClientModule, 
    FlatButtonComponent,
    CarouselComponent,
    TextfieldComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
