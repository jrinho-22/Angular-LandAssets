import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentClientPlotComponent } from './cadastro-client-plot.component';

describe('PaymentClientPlotComponent', () => {
  let component: PaymentClientPlotComponent;
  let fixture: ComponentFixture<PaymentClientPlotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentClientPlotComponent]
    });
    fixture = TestBed.createComponent(PaymentClientPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
