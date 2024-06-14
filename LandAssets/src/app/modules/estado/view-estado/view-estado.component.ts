import { Component } from '@angular/core';
import { EstateModel } from '../models/estate.service';
import IState, { IStateEmpty, StateEmpty } from 'src/app/interfaces/IState';
import { baseRoute } from '../routes';

@Component({
  selector: 'app-view-estado',
  templateUrl: './view-estado.component.html',
  styleUrls: ['./view-estado.component.sass'],
  providers: [EstateModel],
})
export class ViewEstadoComponent {
  estates: IState[] = [];
  headers: any[] = [{ field: 'name', label: 'namememme' }];
  basePath: string = '';

  constructor(private EstateModel: EstateModel) {}

  ngOnInit() {
    this.basePath = baseRoute
    this.EstateModel.getData('').subscribe((v) => (this.estates = v));
  }
}
