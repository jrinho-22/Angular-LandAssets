import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import IState from 'src/app/interfaces/IState';

@Injectable()
export class DashboardService {
  public activeState: BehaviorSubject<IState | undefined> = new BehaviorSubject<IState | undefined>(undefined)

  constructor() { }

  activeStateObs$ = this.activeState.asObservable();

  setState(newState: IState | undefined) {
    this.activeState.next(newState);
  }
}
