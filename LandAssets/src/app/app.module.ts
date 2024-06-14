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
import { CadastroEstadoComponent } from './modules/estado/cadastro-estado/cadastro-estado.component';
import { MatGridListModule } from "@angular/material/grid-list";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewEstadoComponent } from './modules/estado/view-estado/view-estado.component';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { ModalComponent } from './components/modal/modal.component';
import { LoginComponent } from './views/login/login.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CadastroEstadoComponent,
    ViewEstadoComponent,
    LoginComponent,
  ],
  imports: [
    TableComponent,
    ModalComponent,
    MatGridListModule,
    SelectComponent,
    DashboardModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormComponent,
    LogoComponent,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    FlatButtonComponent,
    CarouselComponent,
    TextfieldComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
