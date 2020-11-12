import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('user')
export default class User {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  image_name: string;
}
