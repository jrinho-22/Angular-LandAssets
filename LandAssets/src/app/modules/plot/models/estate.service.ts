import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/services/HttpRequest.service';
import { HttpClient } from '@angular/common/http';
import resources from '../../../config';
import IState from 'src/app/interfaces/IState';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Injectable()
export class EstateModel extends HttpRequestService<IState> {
  constructor(http: HttpClient, snackbarService: SnackbarService) {
    super(http, snackbarService);
  }

  config() {
    return {
      resource: resources.ESTATE,
    };
  }

}