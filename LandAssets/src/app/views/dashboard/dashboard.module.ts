import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ShortSummaryComponent } from './short-summary/short-summary.component';
// import { PlotActionsComponent } from './plot-actions/plot-actions.component';
import { EstateModel } from './models/estate.service';
import { ShortSummaryComponent } from './components/short-summary/short-summary.component';
import { PlotActionsComponent } from './components/plot-actions/plot-actions.component';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { DashboardComponent } from './dashboard.component';
import { FlatButtonComponent } from 'src/app/components/buttons/flat-button/flat-button.component';
import { TextfieldComponent } from 'src/app/components/inputs/textfield/textfield.component';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from 'src/app/components/inputs/select/select.component';
import { DashboardService } from './dashboard.service';
import { PlotModel } from './models/plot.service';

@NgModule({
  declarations: [
    ShortSummaryComponent,
    PlotActionsComponent,
    DashboardComponent,
  ],
  imports: [
    SelectComponent,
    FormsModule,
    CommonModule,
    CarouselComponent,
    FlatButtonComponent,
    TextfieldComponent,
  ],
  providers: [EstateModel, DashboardService, PlotModel],
})
export class DashboardModule {}
