import { Component, Inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormRecord,
  Validators,
} from '@angular/forms';
import { EstateModel } from 'src/app/views/dashboard/models/estate.service';
import { MODAL_BUY_PLOT_VALUES } from '../../../../utils/modal-token';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import IModalBuyPlotValues from 'src/app/interfaces/plot-actions/IModalBuyPlotValues';
import { SalesService } from 'src/app/views/dashboard/models/sales.service';
import { AuthService } from 'src/app/services/auth.service';
import { MyErrorStateMatcher } from 'src/app/components/inputs/textfieldError';

@Component({
  selector: 'app-modal-buy-plot',
  templateUrl: './modal-buy-plot.component.html',
  styleUrls: ['./modal-buy-plot.component.sass'],
  providers: [EstateModel],
})
export class ModalBuyPlotComponent {
  modalForm: FormGroup;
  stateArray!: FormRecord;

  constructor(
    @Inject(MODAL_BUY_PLOT_VALUES)
    private modalBuyPlotValues: BehaviorSubject<IModalBuyPlotValues>,
    private formBuilder: FormBuilder,
    protected EstateModel: EstateModel,
    private SaleModel: SalesService,
    private auth: AuthService
  ) {
    this.modalForm = this.formBuilder.group({
      plotNumber: [{ value: '', disabled: true }],
      stateName: [{ value: '', disabled: true }],
      totalPrice: [{ value: '', disabled: true }],
      cardNumber: ['', Validators.required],
      validade: ['', Validators.required],
      codigoSeguranca: ['', Validators.required],
    });

    this.modalBuyPlotValues.subscribe((v: IModalBuyPlotValues) => {
      if (v.plotNumber !== undefined)
        this.modalForm.patchValue({ plotNumber: v.plotNumber });
      if (v.stateName !== undefined)
        this.modalForm.patchValue({ stateName: v.stateName });
      if (v.totalPrice !== undefined)
        this.modalForm.patchValue({ totalPrice: v.totalPrice });
    });
  }

  ngOnInit() {
    const currentValues = this.modalBuyPlotValues.getValue();
    this.modalBuyPlotValues.next({
      ...currentValues,
      action: () => this.submit(),
    });
  }

  matcher = new MyErrorStateMatcher();
  
  submit() {
    console.log(this.modalForm.valid, 'this.modalForm.validthis.modalForm.valid')
    if (this.modalForm.valid) {
      this.auth.authenticated$
        .pipe(
          switchMap((auth) => {
            const userId = auth.user.userId;
            return this.modalBuyPlotValues.pipe(
              switchMap((plotValues) => {
                const plotId = plotValues.plotId;
                const record = { plotId: plotId, userId: userId };
                return this.SaleModel.postData(record);
              })
            );
          })
        )
        .subscribe();
    }
  }
}
