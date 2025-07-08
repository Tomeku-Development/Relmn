import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserProfileFields1752011592407 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('users');
        if (!table.findColumnByName('username')) {
            await queryRunner.query(`ALTER TABLE "users" ADD "username" character varying`);
            await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username")`);
            await queryRunner.query(`CREATE UNIQUE INDEX "IDX_fe0bb3f6520ee0469504521e710" ON "users" ("username") `);
        }
        if (!table.findColumnByName('bio')) {
            await queryRunner.query(`ALTER TABLE "users" ADD "bio" text`);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('users');
        if (table.findColumnByName('username')) {
            await queryRunner.query(`DROP INDEX "public"."IDX_fe0bb3f6520ee0469504521e710"`);
            await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710"`);
            await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
        }
        if (table.findColumnByName('bio')) {
            await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "bio"`);
        }
    }

}
