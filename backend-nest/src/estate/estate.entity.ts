import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "estate", schema: 'public'})
export class Estate {
    @PrimaryGeneratedColumn()
    estateId: number;

    @Column()
    name: string;

    @Column({ type: 'blob' })
    map: Buffer;
}
