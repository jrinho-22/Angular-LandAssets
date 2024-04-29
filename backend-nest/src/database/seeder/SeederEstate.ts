import { Estate } from 'src/estate/estate.entity';
import { Plot } from 'src/plot/plot.entity';
import { plotSeed } from './SeederPlot';

export const estateSeed: Estate[] = [
    {
      name: 'New York',
      map: 'src/assets/imgs/estateMap.png',
      size: '54,552',
      oceanDistance: '50km',
      plotsAvailable: 0,
      population: '19,453,561',
      counties: 62,
      paymentTerm: 'Bi-annual Payments',
      averagePricePerSQM: '16',
      averagePartialPaymentPrice: '8000',
    },
    {
      name: "California",
      map: "src/assets/imgs/estateMap.png",
      size: "163,696",
      oceanDistance: "12km",
      plotsAvailable: 0,
      population: "39,512,223",
      counties: 58,
      paymentTerm: "Flexible",
      averagePricePerSQM: "15",
      averagePartialPaymentPrice: "7500",
    },
    {
      name: "Texas",
      map: "src/assets/imgs/estateMap.png",
      size: "268,596",
      oceanDistance: "55km",
      plotsAvailable: 0,
      population: "28,995,881",
      counties: 254,
      paymentTerm: "Monthly Installments",
      averagePricePerSQM: "12",
      averagePartialPaymentPrice: "6000",
    },
  ];