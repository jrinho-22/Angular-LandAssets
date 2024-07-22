import { Plot } from '../../plot/plot.entity';
import { Users } from "../../users/user.entity";
import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Column } from "typeorm";

@Entity('sale')
export class Sale {
    @PrimaryColumn({ name: 'userId' })
    userId: number;
  
    @PrimaryColumn({ name: 'plotId' })
    plotId: number;
  
    @ManyToOne(
      () => Plot,
      plot => plot.users,
    )
    @JoinColumn([{ name: 'plotId'}])
    plot: Plot[];
  
    @ManyToOne(
      () => Users,
      user => user.plot
    )
    @JoinColumn([{ name: 'userId'}])
    users: Users[];

    @Column({default: 0})
    totalInstallments: number;

    @Column({default: 0})
    remainingInstallments: number;

    @Column({default: 0})
    totalCost: Number;

    @Column({default: 0})
    installmentCost: Number;

}
