import { Estate } from 'src/estate/estate.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity({name: "plot", schema: 'public'})
export class Plot {
    @PrimaryGeneratedColumn()
    plotId?: number;

    @ManyToOne(() => Estate, (estate) => estate.plots)
    estate: Estate

    @Column()
    number: number;

    @Column()
    pricePerSQM: number;

    @Column()
    size: string;

    @Column()
    priceSQMPartialPayment: number;

    @Column()
    totalCashPrice: number;

    @Column()
    totalPartialPaymentPrice: number;

    @Column()
    firstInstallment: number;
}
