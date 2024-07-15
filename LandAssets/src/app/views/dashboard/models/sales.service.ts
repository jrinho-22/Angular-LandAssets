import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from 'src/app/services/snackbar.service';
import resources from 'src/app/config';
import { HttpRequestService } from 'src/app/services/HttpRequest.service';
import ISale from 'src/app/interfaces/ISale';

@Injectable({
  providedIn: 'root'
})
export class SalesService extends HttpRequestService<ISale> {

  constructor(http: HttpClient, snackbarService: SnackbarService) {
    super(http, snackbarService);
  }

  config() {
    return {
      resource: resources.SALE,
    };
  }
}
