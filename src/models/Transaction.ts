import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Transactions')
class TransactionModel {
  @PrimaryGeneratedColumn('increment') id: number;
  @Column() description: string;
  @Column() idPerson: number;
  @Column() amount: number;
  @Column() date: string;
}

export default TransactionModel;
