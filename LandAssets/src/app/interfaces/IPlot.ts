export default interface IPlot {
  plotId: number;
  estateId: number;
  number: number;
  pricePerSQM: number;
  size: string;
  priceSQMPartialPayment: number;
  totalCashPrice: number;
  totalPartialPaymentPrice: number;
  firstInstallment: number;
}

export interface IPlotEmpty {
  plotId: null,
  estateId: null,
  number: null,
  pricePerSQM: null,
  size: null,
  priceSQMPartialPayment: null,
  totalCashPrice: null,
  totalPartialPaymentPrice: null,
  firstInstallment: null
}

export const PlotEmpty: IPlotEmpty = {
  plotId: null,
  estateId: null,
  number: null,
  pricePerSQM: null,
  size: null,
  priceSQMPartialPayment: null,
  totalCashPrice: null,
  totalPartialPaymentPrice: null,
  firstInstallment: null
}
