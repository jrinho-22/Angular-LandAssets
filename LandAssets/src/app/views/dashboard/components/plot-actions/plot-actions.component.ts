import {
  AfterContentInit,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  ContentChild,
  ElementRef,
  Inject,
  Injector,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation,
  createComponent,
} from '@angular/core';
import IState, { IStateEmpty, StateEmpty } from 'src/app/interfaces/IState';
import IPlot, { IPlotEmpty, PlotEmpty } from 'src/app/interfaces/IPlot';
import { HttpRequestService } from '../../../../services/HttpRequest.service';
// import { factoryProvider } from './plot-actions.http.service.provider';
import { EstateModel } from '../../models/estate.service';
import { PlotModel } from '../../models/plot.service';
import { DashboardService } from '../../utils/dashboard.service';
import { IStateDash } from '../../../../interfaces/plot-actions/IStateDash';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';
// import { ModalBuyPlotComponent } from './modals/modal-buy-plot/modal-buy-plot.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { MODAL_BUY_PLOT_VALUES } from '../../../../tokens/modal-token';
import { BehaviorSubject, Observable } from 'rxjs';
import IModalData from 'src/app/interfaces/IModalData';
import IModalBuyPlotValues from 'src/app/interfaces/plot-actions/IModalBuyPlotValues';

@Component({
  selector: 'app-plot-actions',
  templateUrl: './plot-actions.component.html',
  styleUrls: ['./plot-actions.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class PlotActionsComponent {
  defaultStateIndex = 0;

  states: IState[] = [];
  activeStateIndex: number = this.defaultStateIndex;
  stateFields: IState | IStateEmpty = StateEmpty;
  plots: IPlot[] = [];
  plotsByState: IPlot[] = [];
  activePlot: IPlot | undefined = undefined;
  componentRef!: ComponentRef<any>;
  actionFun!: () => void;
  template: any;

  constructor(
    @Inject(MODAL_BUY_PLOT_VALUES)
    private modalBuyPlotValues: BehaviorSubject<IModalBuyPlotValues>,
    private EstateModel: EstateModel,
    private PlotModel: PlotModel,
    private DashboardService: DashboardService,
    public dialog: MatDialog
  ) {}

  async ngOnInit() {
    // ModalBuyPlotComponent == contructor function itself
    this.getStates();
    this.subscribeToDashboardService();
    this.modalBuyPlotValues.subscribe((v: IModalBuyPlotValues) => {
      // console.log(v , 'vvvv')
      // this.actionFun = v.action;
    });
  }

  subscribeToDashboardService() {
    this.DashboardService.activeStateObs$.subscribe((stateDash: IStateDash) => {
      if (stateDash.state.estateId != null) {
        this.activePlot = undefined;
        const index = this.states.findIndex(
          (Item: IState | IStateEmpty) => Item.name == stateDash.state.name
        );
        index != -1
          ? (this.activeStateIndex = index)
          : (this.activeStateIndex = 0);
        this.stateFields = stateDash.state;
        this.getPlotsByState(stateDash.state.estateId);

        //insert stateName on MODAL_BUY_PLOT_VALUES
        const currentValues = this.modalBuyPlotValues.getValue();
        const stateName = stateDash.state.name
          ? stateDash.state.name
          : '';
        this.modalBuyPlotValues.next({
          ...currentValues,
          estate: stateName,
        });
      }
    });
  }

  async openDialog() {
    const { ModalBuyPlotComponent } = await import('./modals/modal-buy-plot/modal-buy-plot.component')

    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        // action: () => this.actionFun(),
        size: 'lg',
        component: ModalBuyPlotComponent,
        text: { title: 'Buy Plot', action: 'CONFIRM', close: 'CANCEL' },
      } ,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was sed');
    });

    // const modalComponentInstance = dialogRef.componentInstance;
    // modalComponentInstance.actionButtonClicked.subscribe(() => {
      // ModalBuyPlotComponent.prototype.submit();
    // });
  }

  getStates() {
    this.EstateModel.getData('').subscribe((response: IState[]) => {
      this.states = response;
      this.initialStateValues();
    });
  }

  initialStateValues() {
    this.stateFields = this.states[this.defaultStateIndex];
    this.getPlotsByState(this.states[this.defaultStateIndex].estateId);
    this.DashboardService.setState(this.states[this.defaultStateIndex], false);
  }

  getPlotsByState(estateId: number) {
    this.PlotModel.dataByState(estateId).subscribe((response: IPlot[]) => {
      this.plotsByState = response;
    });
  }

  handlePageChange(index: number) {
    this.DashboardService.setState(this.states[index], false);
  }

  receiveSelectData(data: string) {
    this.activePlot = this.plotsByState.find((v) => String(v.number) == data);
    const currentValues = this.modalBuyPlotValues.getValue();
    this.modalBuyPlotValues.next({
      ...currentValues,
      size: this.activePlot?.size,
      plotId: this.activePlot?.plotId,
      totalCashPrice: this.activePlot?.totalCashPrice,
      totalPartialPaymentPrice: this.activePlot?.totalPartialPaymentPrice,
      number: this.activePlot?.number,
    });   
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
