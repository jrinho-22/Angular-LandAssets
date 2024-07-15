import { Component } from '@angular/core';
import IPlot from 'src/app/interfaces/IPlot';
import { PlotModel } from '../models/plot.service';
import { baseRoute } from '../routes';

@Component({
  selector: 'app-view-plot',
  templateUrl: './view-plot.component.html',
  styleUrls: ['./view-plot.component.sass']
})
export class ViewPlotComponent {
  plot: IPlot[] = [];
  headers: any[] = [{ field: 'number', label: 'Number' }, { field: 'size', label: 'Size' }, { field: 'estate.name', label: 'Estado' }];
  basePath: string = '';

  constructor(public plotModel: PlotModel) {}

  ngOnInit() {
    this.basePath = baseRoute
    this.plotModel.getData('').subscribe((v: IPlot[]) => (this.plot = v));
  }
}
