import { Estate } from 'src/estate/estate.entity';
import { Users } from 'src/users/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity({ name: 'plot', schema: 'public' })
export class Plot {
  @PrimaryGeneratedColumn()
  plotId?: number;

  @ManyToOne(() => Estate, (estate) => estate.plots)
  estate: Estate;

  @ManyToMany(
    () => Users,
    (user) => user.plot, //optional
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  users?: Users[];

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
