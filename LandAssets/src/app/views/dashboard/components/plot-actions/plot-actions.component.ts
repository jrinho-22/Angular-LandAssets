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
} from '@angular/core';
import IState from 'src/app/interfaces/IState';
import { HttpRequestService } from '../../../../services/HttpRequest.service';
// import { factoryProvider } from './plot-actions.http.service.provider';
import { EstateModel } from '../../models/estate.service';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-plot-actions',
  templateUrl: './plot-actions.component.html',
  styleUrls: ['./plot-actions.component.sass'],
})
export class PlotActionsComponent {
  // @ViewChild('templateRef') item1!: TemplateRef<any>;
  states: IState[] | [] = [];
  activeStateIndex: number = 0

  constructor(
    private PlotActions: EstateModel,
    private DashboardService: DashboardService
  ) {}

  ngOnInit() {
    this.getStates();
    this.DashboardService.activeStateObs$.subscribe((activeState) => {
      const index = this.states.findIndex((Item: IState) => Item.name == activeState?.name )
      index != -1 ? this.activeStateIndex = index : this.activeStateIndex = 0  
    });
  }

  getStates() {
    this.PlotActions.getData<IState[]>().subscribe((response) => {
      this.states = response;
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
