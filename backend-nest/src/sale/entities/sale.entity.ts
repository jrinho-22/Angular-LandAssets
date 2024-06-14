import { Plot } from "src/plot/plot.entity";
import { Users } from "src/users/user.entity";
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
    @JoinColumn([{ name: 'plotId', referencedColumnName: 'plotId' }])
    users: Users[];
  
    @ManyToOne(
      () => Users,
      user => user.plot
    )
    @JoinColumn([{ name: 'userId', referencedColumnName: 'userId' }])
    plot: Plot[];

    @Column({default: 0})
    installments: Number;
}
