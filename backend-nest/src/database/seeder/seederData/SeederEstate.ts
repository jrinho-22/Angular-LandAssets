import { Estate } from 'src/estate/estate.entity';
import { Plot } from 'src/plot/plot.entity';
import { plotSeed } from './SeederPlot';

export const estateSeed: Estate[] = [
    {
      name: 'New York',
      map: 'src\\assets\\imgs\\estateMap.png',
      size: 54552,
      oceanDistance: 50,
      plotsAvailable: 0,
      population: 19453561,
      counties: 62,
      paymentTerm: 'Bi-annual Payments',
      averagePricePerSQM: 16,
      averagePartialPaymentPrice: 8000,
    },
    {
      name: "California",
      map: "src\\assets\\imgs\\Kansas.png",
      size: 163696,
      oceanDistance: 12,
      plotsAvailable: 0,
      population: 39512223,
      counties: 58,
      paymentTerm: "Flexible",
      averagePricePerSQM: 15,
      averagePartialPaymentPrice: 7500,
    },
    {
      name: "Texas",
      map: "src\\assets\\imgs\\mapa1.jpg",
      size: 268536,
      oceanDistance: 55,
      plotsAvailable: 0,
      population: 28995881,
      counties: 254,
      paymentTerm: "Monthly Installments",
      averagePricePerSQM: 11,
      averagePartialPaymentPrice: 6000,
    },
  ];