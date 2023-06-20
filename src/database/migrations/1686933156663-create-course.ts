import type { MigrationInterface, QueryRunner } from 'typeorm';

import * as data from './../course-data-clean.json';

export class SeedData1614146740212 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    for (const item of data) {
      await queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into('courses')
        .values(item)
        .execute();
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Here you can either delete all data, or handle it based on your requirements
    await queryRunner.clearTable('courses');
  }
}
