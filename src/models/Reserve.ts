import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('reserve')
export default class Reserve {
  @PrimaryColumn()
  id: number;

  @Column()
  selected: boolean;

  @Column()
  date: string;

  @Column()
  initial_value: number;

  @Column()
  amount: number;
}
