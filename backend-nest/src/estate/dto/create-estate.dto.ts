import { Plot } from "src/plot/plot.entity";

export class CreateEstateDto {
  estateId?: number; 
  name: string;
  map: string;
  size: string;
  oceanDistance: string;
  plotsAvailable: number;
  population: string;
  counties: number;
  paymentTerm: string;
  averagePricePerSQM: string;
  averagePartialPaymentPrice: string;
}
