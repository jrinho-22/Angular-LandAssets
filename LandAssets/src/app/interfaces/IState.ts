export default interface IState {
  estateId: number
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

export interface IStateEmpty {
  estateId: number | null;
  name: string | null;
  map: string | null;
  size: string | null;
  oceanDistance: string | null;
  plotsAvailable: number | null;
  population: string | null;
  counties: number | null;
  paymentTerm: string | null;
  averagePricePerSQM: string | null;
  averagePartialPaymentPrice: string | null;
}

export const StateEmpty: IStateEmpty = {
  estateId: null,
  name: null,
  map: null,
  size: null,
  oceanDistance: null,
  plotsAvailable: null,
  population: null,
  counties: null,
  paymentTerm: null,
  averagePricePerSQM: null,
  averagePartialPaymentPrice: null,
}
