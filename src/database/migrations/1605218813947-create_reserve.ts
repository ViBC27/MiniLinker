import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createReserve1605218306014 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'reserve',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: false
          },
          {
            name: 'selected',
            type: 'boolean'
          },
          {
            name: 'date',
            type: 'text'
          },
          {
            name: 'initial_value',
            type: 'decimal',
            scale: 10,
            precision: 2
          },
          {
            name: 'amount',
            type: 'decimal',
            scale: 10,
            precision: 2
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('reserve');
  }
}
