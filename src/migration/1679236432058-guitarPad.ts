import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class guitarPad1679236432058 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "guitar_pad",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "link",
                        type: "varchar"
                    }
                ]
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("guitar_pad")
    }

}
