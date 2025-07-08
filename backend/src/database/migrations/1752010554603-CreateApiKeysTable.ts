import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateApiKeysTable1752010554603 implements MigrationInterface {
    name = 'CreateApiKeysTable1752010554603'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "api_keys" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "key" character varying NOT NULL, "description" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "lastUsedAt" TIMESTAMP, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_5c8a79801b44bd27b79228e1dad" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_e42cf55faeafdcce01a82d2484" ON "api_keys" ("key") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_e42cf55faeafdcce01a82d2484"`);
        await queryRunner.query(`DROP TABLE "api_keys"`);
    }

}
