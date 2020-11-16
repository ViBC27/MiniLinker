import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('Main')
class MainModel {
  @PrimaryColumn() idPerson: number;
  @Column() amount: number;
}

export default MainModel;
