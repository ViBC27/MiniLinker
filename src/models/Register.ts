import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('register')
class Register {
  @Column() entryDate: Date;
  @Column() outputDate: Date;
  @Column() selected: boolean;
  @Column() amount: number = 0;
  @PrimaryColumn('increment') id: number;
}

export default Register;
