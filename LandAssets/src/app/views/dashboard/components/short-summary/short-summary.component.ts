import { Component } from '@angular/core';
import IState from 'src/app/interfaces/IState';
import { EstateModel } from '../../models/estate.service';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-short-summary',
  templateUrl: './short-summary.component.html',
  styleUrls: ['./short-summary.component.sass'],
})

export class ShortSummaryComponent {
  states: IState[] | [] = [];
  selectedState: IState | undefined = undefined;

  constructor(private EstateModel: EstateModel, private DashboardService: DashboardService) {}

  ngOnInit() {
    this.getStates();
    this.DashboardService.activeStateObs$.subscribe((activeState) => {
      this.selectedState = activeState
    });
  }

  getStates() {
    this.EstateModel.getData<IState[]>().subscribe((response) => {
      this.states = response;
    });
  }

  receiveData(data: string) {
    this.DashboardService.setState(this.states.find(v => v.name == data)) 
  }
}
