import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/services/HttpRequest.service';
import { HttpClient } from '@angular/common/http';
import resources from '../../../config';
import IState from 'src/app/interfaces/IState';

@Injectable()
export class EstateModel extends HttpRequestService<IState> {
  constructor(http: HttpClient) {
    super(http);
  }

  config() {
    return {
      resource: resources.ESTATE,
    };
  }

}