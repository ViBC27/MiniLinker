import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Main1605479980267 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Main',
        columns: [
          {
            name: 'idPerson',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: false
          },
          {
            name: 'amount',
            type: 'decimal',
            precision: 2,
            scale: 10
          }
        ]
      })
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Main');
  }
}
