import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transactions')
export default class Transaction {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  date: string;

  @Column()
  value: number;
}
