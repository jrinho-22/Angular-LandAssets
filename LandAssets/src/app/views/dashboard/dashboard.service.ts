import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import IState, { IStateEmpty, StateEmpty } from 'src/app/interfaces/IState';

@Injectable()
export class DashboardService {
  public activeState: BehaviorSubject<IState | IStateEmpty> = new BehaviorSubject<IState | IStateEmpty>(StateEmpty)

  constructor() { }

  activeStateObs$ = this.activeState.asObservable();

  setState(newState: IState) {
    this.activeState.next(newState);
  }
}
