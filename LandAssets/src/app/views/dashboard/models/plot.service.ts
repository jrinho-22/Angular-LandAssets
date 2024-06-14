import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/services/HttpRequest.service';
import { HttpClient } from '@angular/common/http';
import resources from '../../../config';
import IPlot from 'src/app/interfaces/IPlot';
import { Observable } from 'rxjs';

@Injectable()
export class PlotModel extends HttpRequestService<IPlot> {

  constructor(http: HttpClient) {
    super(http);
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
