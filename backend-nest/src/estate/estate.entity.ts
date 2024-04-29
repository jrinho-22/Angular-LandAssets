import { Plot } from 'src/plot/plot.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({name: "estate", schema: 'public'})
export class Estate {
    @PrimaryGeneratedColumn()
    estateId?: number;

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

    @OneToMany(() => Plot, (plot) => plot.estate)
    plots?: Plot[];

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
