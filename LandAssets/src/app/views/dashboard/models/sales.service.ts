import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import resources from 'src/app/config';
import { HttpRequestService } from 'src/app/services/HttpRequest.service';

@Injectable({
  providedIn: 'root'
})
export class SalesService extends HttpRequestService<unknown> {

  constructor(http: HttpClient) {
    super(http);
  }

  config() {
    return {
      resource: resources.SALE,
    };
  }
}
