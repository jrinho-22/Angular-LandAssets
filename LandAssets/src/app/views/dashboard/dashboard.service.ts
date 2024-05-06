import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import IPlot, { IPlotEmpty, PlotEmpty } from 'src/app/interfaces/IPlot';
import IState, { IStateEmpty, StateEmpty } from 'src/app/interfaces/IState';
import { IStateDash } from './IStateDash';

@Injectable()
export class DashboardService {
  public activeState: BehaviorSubject<IStateDash> =
    new BehaviorSubject<IStateDash>({ state: StateEmpty, scroll: false });

  public activePlot: BehaviorSubject<IPlot | undefined> = new BehaviorSubject<
    IPlot | undefined
  >(undefined);

  constructor() {}

  activePlotObs$ = this.activePlot.asObservable();
  activeStateObs$ = this.activeState.asObservable();

  setState(newState: IState, triggerScroll: boolean) {
    this.activeState.next({ state: newState, scroll: triggerScroll });
  }
  
}
