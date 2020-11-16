import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('Emergencies')
class EmergencyModel {
  @PrimaryColumn() idPerson: number;
  @Column() amount: number;
}

export default EmergencyModel;
