import { Component, Inject, ViewChild, ViewContainerRef } from '@angular/core';
import { baseRoute } from '../routes';
import { SalesModel } from '../models/sales.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FORM_SUBMIT } from 'src/app/tokens/formSubmitHandler';
import { BehaviorSubject } from 'rxjs';
import IModalBuyPlotValues from 'src/app/interfaces/plot-actions/IModalBuyPlotValues';
import { MODAL_BUY_PLOT_VALUES } from 'src/app/tokens/modal-token';
import ISale from 'src/app/interfaces/ISale';
import { platform } from 'os';
import IPlot from 'src/app/interfaces/IPlot';

@Component({
  selector: 'app-view-client-plot',
  templateUrl: './view-client-plot.component.html',
  styleUrls: ['./view-client-plot.component.sass'],
  providers: [SalesModel],
})
export class ViewClientPlotComponent {
  collection: Array<any> = []
  headers: any[] = [
    { field: 'plot.number', label: 'Plot Number' },
    { field: 'totalCost', label: 'Total Price' },
    { field: 'installmentCost', label : 'Installment Price'},
    { field: 'remainingInstallments', label: 'Remaining installments' },
    { field: 'totalInstallments', label: 'Total Installments'},
  ];
  basePath: string = baseRoute;


  constructor(
    @Inject(MODAL_BUY_PLOT_VALUES)
    private modalBuyPlotValues: BehaviorSubject<ISale>,
    public salesModel: SalesModel,
    public dialog: MatDialog,
    private router: Router,
  ) { }

  // visualizar(collection: any) {
    // this.router.navigate([`${this.basePath}/vizualizar/1`]);
  // }

  async openDialog(sale: ISale) {
    console.log(sale, 'salelellel')
    const { ModalPaymentComponent } = await import('../modals/payment/payment.component')
    const currentModalValues = this.modalBuyPlotValues.getValue()
    this.modalBuyPlotValues.next({
      ...currentModalValues,
      plotId: (sale.plot as IPlot).plotId,
      plot: sale.plot,
      totalCost: sale.totalCost,
      totalInstallments: sale.totalInstallments
    })

    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        // action: () => this.modalBuyPlotValues.getValue().action(),
        size: 'lg',
        component: ModalPaymentComponent,
        text: { title: 'Plot Payment', action: 'CONFIRM', close: 'CANCEL' },
      } ,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was sed');
    });

    // const modalComponentInstance = dialogRef.componentInstance;
    // modalComponentInstance.actionButtonClicked.subscribe(() => {
      // ModalBuyPlotComponent.prototype.submit();
    // });
  }

  ngOnInit() {
    this.salesModel.getPlotsByUser().subscribe((v: ISale[]) => {
      this.collection = v
    });
  }
}
