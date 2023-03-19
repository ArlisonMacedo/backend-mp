import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class ambientPad1679236202919 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "ambient_pad",
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
        await queryRunner.dropTable("ambient_pad")
    }

}
