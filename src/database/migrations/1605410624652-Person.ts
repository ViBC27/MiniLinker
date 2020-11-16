import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Person1605410624652 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'People',
        columns: [
          {
            name: 'idPerson',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'email',
            type: 'varchar'
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'isRegister',
            type: 'boolean'
          },
          {
            name: 'isEmergency',
            type: 'boolean'
          }
        ]
      })
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('People');
  }
}
