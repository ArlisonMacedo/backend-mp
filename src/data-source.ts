import "reflect-metadata"
import { DataSource } from "typeorm"
import path from "path"
import { AmbientPad } from "./entity/AmbientPad"
import { AgudoPad } from './entity/AgudoPad'
import { GuitarPad } from "./entity/GuitarPad"
import { ambientPad1679236202919 } from "./migration/1679236202919-ambientPad"
import { agudoPad1679236359863 } from "./migration/1679236359863-agudoPad"
import { guitarPad1679236432058 } from "./migration/1679236432058-guitarPad"

//** migrations*/


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "mysql.mpadslive.com",
    port: 3306,
    username: "mpadslive",
    password: "mpadslive0901",
    database: "mpadslive",
    synchronize: true,
    logging: false,
    entities: [
        AmbientPad,
        AgudoPad,
        GuitarPad
    ],
    migrations: [ambientPad1679236202919, agudoPad1679236359863, guitarPad1679236432058],
    subscribers: [],
})
