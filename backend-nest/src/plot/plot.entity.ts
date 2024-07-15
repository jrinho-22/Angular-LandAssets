import { Estate } from 'src/estate/estate.entity';
import { Users } from 'src/users/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'plot', schema: 'public' })
export class Plot {
  @PrimaryGeneratedColumn()
  plotId?: number;

  // @Column({ name: 'estateEstateId' })
  // estateEstateId: number;

  @ManyToOne(() => Estate, (estate) => estate.plots)
  // @JoinColumn({name: 'estateId'})
  estate: Estate;

  @ManyToMany(
    () => Users,
    (user) => user.plot, //optional
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  users?: Users[];

  @Column()
  number: number;

  @Column()
  pricePerSQM: number;

  @Column()
  size: number;

  @Column()
  priceSQMPartialPayment: number;

  @Column()
  totalCashPrice: number;

  @Column()
  totalPartialPaymentPrice: number;

  @Column()
  firstInstallment: number;
}
