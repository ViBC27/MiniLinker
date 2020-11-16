import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Transaction1605490163625 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Transactions',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'idPerson',
            type: 'integer'
          },
          {
            name: 'amount',
            type: 'decimal',
            precision: 2,
            scale: 10
          },
          {
            name: 'description',
            type: 'text'
          },
          {
            name: 'date',
            type: 'datetime'
          }
        ]
      })
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Transactions');
  }
}
