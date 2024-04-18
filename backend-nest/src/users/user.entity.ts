import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "users", schema: 'public'})
export class Users {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  password: string;

  @Column()
  dob: Date;

//   @Column({ default: true })
//   isActive: boolean;
}