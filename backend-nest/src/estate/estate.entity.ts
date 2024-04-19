import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "estate", schema: 'public'})
export class Estate {
    @PrimaryGeneratedColumn()
    estateId: number;

    @Column()
    name: string;

    @Column()
    map: string;

    @Column()
    size: string;

    @Column()
    oceanDistance: string;

    @Column()
    plotsAvailable: number;

    @Column()
    population: string;

    @Column()
    counties: number;

    @Column()
    paymentTerm: string;

    @Column()
    averagePricePerSQM: string;

    @Column()
    averagePartialPaymentPrice: string;
}
