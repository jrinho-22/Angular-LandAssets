import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/services/HttpRequest.service';
import { HttpClient } from '@angular/common/http';
import resources from '../../../config';
import IPlot from 'src/app/interfaces/IPlot';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Injectable()
export class PlotModel extends HttpRequestService<IPlot> {

  constructor(http: HttpClient, snackbarService: SnackbarService) {
    super(http, snackbarService);
  }

  config() {
    return {
      resource: resources.PLOT,
    };
  }

  dataByState(stateId: number) :Observable<IPlot[]> {
    return this.http.get<IPlot[]>(`${this.updatedUrl}`, {params: {"estate.estateId": stateId}, headers: this._headers});
  }
}
