import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/services/HttpRequest.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EstateModel extends HttpRequestService {
  constructor(http: HttpClient) {
    super(http);
  }

  config() {
    return {
      resource: 'estate',
    };
  }
}