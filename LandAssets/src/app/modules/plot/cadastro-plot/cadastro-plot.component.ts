import { Component, Inject, ViewChild } from '@angular/core';
import { PlotModel } from '../models/plot.service';
import { FormGroup, FormBuilder, FormControl, AbstractControl, Validators } from '@angular/forms';
import IPlot from 'src/app/interfaces/IPlot';
import { EstateModel } from '../models/estate.service';
import IState from 'src/app/interfaces/IState';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { Action } from 'rxjs/internal/scheduler/Action';
import { BehaviorSubject } from 'rxjs';
import ISnackBarData from 'src/app/interfaces/ISnackBarData';
import IFormParent from 'src/app/interfaces/IFormParent';

@Component({
  selector: 'app-cadastro-plot',
  templateUrl: './cadastro-plot.component.html',
  styleUrls: ['./cadastro-plot.component.sass'],
  providers: [EstateModel]
})
export class CadastroPlotComponent implements IFormParent<IPlot>{
  plotForm: FormGroup<{ [key in keyof Omit<IPlot, 'plotId'>]: FormControl }>;
  states: IState[] = []

  constructor(
    private formBuilder: FormBuilder,
    protected plotModel: PlotModel,
    private stateModel: EstateModel,
    private _snackBar: MatSnackBar,
  ) {
    this.plotForm = this.formBuilder.group({
      estateId: ['', Validators.required],
      number: ['', Validators.required],
      pricePerSQM: ['', Validators.required],
      size: ['', Validators.required],
      priceSQMPartialPayment: ['', Validators.required],
      totalCashPrice: ['', Validators.required],
      totalPartialPaymentPrice: ['', Validators.required],
      firstInstallment: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getStates()
  }

  getStates() {
    this.stateModel.getData('').subscribe((states: IState[]) => {
      this.states = states
    })
  }

  beforeLoad(data: IPlot) {
    return { ...data, estateId: data['estate']?.estateId }
  }
}
