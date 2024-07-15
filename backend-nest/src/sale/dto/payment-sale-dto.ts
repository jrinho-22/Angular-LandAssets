import { IsNotEmpty } from "class-validator";

export class PaymentSaleDto {
    @IsNotEmpty()
    plotId: number;

    @IsNotEmpty()
    fullPayment: boolean;
}
