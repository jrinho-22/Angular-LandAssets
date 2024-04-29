import { Estate } from "src/estate/estate.entity";

export class CreatePlotDto {
    plotId?: number;
    estateId: number;
    number: number;
    pricePerSQM: number;
    size: string;
    priceSQMPartialPayment: number;
    totalCashPrice: number;
    totalPartialPaymentPrice: number;
    firstInstallment: number;
}
