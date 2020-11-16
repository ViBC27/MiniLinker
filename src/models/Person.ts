import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('People')
class PersonModel {
  @PrimaryGeneratedColumn('increment') idPerson: number;
  @Column() email: string;
  @Column() name: string;
  @Column() isRegister: boolean;
  @Column() isEmergency: boolean;
}

export default PersonModel;
