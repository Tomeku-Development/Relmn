import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1752009517482 implements MigrationInterface {
    name = 'InitialSchema1752009517482'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "walletAddress" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_fc71cd6fb73f95244b23e2ef113" UNIQUE ("walletAddress"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "portfolios" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_488aa6e9b219d1d9087126871ae" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."transactions_type_enum" AS ENUM('SWAP', 'DEPOSIT', 'WITHDRAWAL')`);
        await queryRunner.query(`CREATE TYPE "public"."transactions_status_enum" AS ENUM('PENDING', 'COMPLETED', 'FAILED')`);
        await queryRunner.query(`CREATE TABLE "transactions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" "public"."transactions_type_enum" NOT NULL, "assetIn" character varying NOT NULL, "amountIn" numeric(18,8) NOT NULL, "assetOut" character varying, "amountOut" numeric(18,8), "status" "public"."transactions_status_enum" NOT NULL, "hash" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "portfolioId" uuid, CONSTRAINT "UQ_6f30cde2f4cf5a630e053758400" UNIQUE ("hash"), CONSTRAINT "PK_a219afd8dd77ed80f5a862f1db9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "portfolios" ADD CONSTRAINT "FK_e4e66691a2634fcf5525e33ecf5" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD CONSTRAINT "FK_3682c52dea5cc662b3d9b00a74b" FOREIGN KEY ("portfolioId") REFERENCES "portfolios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" DROP CONSTRAINT "FK_3682c52dea5cc662b3d9b00a74b"`);
        await queryRunner.query(`ALTER TABLE "portfolios" DROP CONSTRAINT "FK_e4e66691a2634fcf5525e33ecf5"`);
        await queryRunner.query(`DROP TABLE "transactions"`);
        await queryRunner.query(`DROP TYPE "public"."transactions_status_enum"`);
        await queryRunner.query(`DROP TYPE "public"."transactions_type_enum"`);
        await queryRunner.query(`DROP TABLE "portfolios"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
