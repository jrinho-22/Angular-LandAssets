import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import IState, { IStateEmpty, StateEmpty } from 'src/app/interfaces/IState';
import IPlot, { IPlotEmpty, PlotEmpty } from 'src/app/interfaces/IPlot';
import { HttpRequestService } from '../../../../services/HttpRequest.service';
// import { factoryProvider } from './plot-actions.http.service.provider';
import { EstateModel } from '../../models/estate.service';
import { PlotModel } from '../../models/plot.service';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-plot-actions',
  templateUrl: './plot-actions.component.html',
  styleUrls: ['./plot-actions.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class PlotActionsComponent {
  // @ViewChild('templateRef') item1!: TemplateRef<any>;
  defaultStateIndex = 0

  states: IState[] = [];
  activeStateIndex: number = this.defaultStateIndex
  stateFields: IState | IStateEmpty = StateEmpty
  plots: IPlot[] = [];
  plotsByState: IPlot[] = [];
  activePlot: IPlot | IPlotEmpty = PlotEmpty

  constructor(
    private EstateModel: EstateModel,
    private PlotModel: PlotModel,
    private DashboardService: DashboardService,
  ) {}

  ngOnInit() {
    this.getStates();

    this.DashboardService.activeStateObs$.subscribe((activeState: IState | IStateEmpty) => {
      if (activeState.estateId != null) {
        const index = this.states.findIndex((Item: IState | IStateEmpty) => Item.name == activeState.name )
        index != -1 ? this.activeStateIndex = index : this.activeStateIndex = 0 
        this.stateFields = activeState
        this.getPlots(activeState.estateId) 
      }
    });
  }

  async getStates() {
    this.EstateModel.getData<IState[]>('').subscribe((response) => {
      this.states = response;
      this.stateFields = response[this.defaultStateIndex]
      this.getPlots(response[this.defaultStateIndex].estateId)
    });
  }

  getPlots(estateId: number) {
    // this.PlotModel.getData<IPlot[]>('').subscribe((response) => {
    //   this.plots = response;
    this.PlotModel.dataByState(estateId).subscribe((response: any) => {
      this.plotsByState = response
      // this.stateFields = response[this.defaultStateIndex]
    });
  }

  handlePageChange (index: number){
    this.DashboardService.setState(this.states[index]) 
  }

  // ngDoCheck(changes: any) {
  //   console.log(changes, 'States changed:', this.states);
  //   // Perform any actions you want when the states input property changes
  // }

  myValue = 'myValue';
  // myValue(e: any) {
  //   console.log(e)
  //   return ''
  // }

  teste = ['state1'];
}
