import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/services/HttpRequest.service';
import { HttpClient } from '@angular/common/http';
import resources from '../../../config';

@Injectable()
export class PlotModel extends HttpRequestService {

  constructor(http: HttpClient) {
    super(http);
  }

  config() {
    return {
      resource: resources.PLOT,
    };
  }

  dataByState(stateId: number) {
    return this.http.get(`${this.updatedUrl}`, {params: {"estate.estateId": stateId}, });
  }
}
