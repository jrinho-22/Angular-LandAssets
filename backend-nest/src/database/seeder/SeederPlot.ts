import { estateSeed } from './SeederEstate';
import { Plot } from 'src/plot/plot.entity';
import { CreatePlotDto } from 'src/plot/dto/create-plot.dto';

export const plotSeed: CreatePlotDto[] = [
  {
    estateId: 2,
    number: 3,
    size: "180",
    pricePerSQM: 23,
    priceSQMPartialPayment: 25,
    totalCashPrice: 560000,
    totalPartialPaymentPrice: 380000,
    firstInstallment: 40000
  },
  {
    estateId: 1,
    number: 3,
    size: "180",
    pricePerSQM: 23,
    priceSQMPartialPayment: 25,
    totalCashPrice: 560000,
    totalPartialPaymentPrice: 380000,
    firstInstallment: 40000
  },
  {
    estateId: 1,
    number: 2,
    size: "180",
    pricePerSQM: 23,
    priceSQMPartialPayment: 25,
    totalCashPrice: 560000,
    totalPartialPaymentPrice: 380000,
    firstInstallment: 40000
  },
  {
    estateId: 1,
    number: 4,
    size: "130",
    pricePerSQM: 23,
    priceSQMPartialPayment: 25,
    totalCashPrice: 560000,
    totalPartialPaymentPrice: 380000,
    firstInstallment: 40000
  }
];