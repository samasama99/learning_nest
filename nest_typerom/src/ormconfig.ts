import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

export const config: SqliteConnectionOptions = {
    type: 'sqlite',
    database: 'db',
    entities: [
        '/Users/orahmoun/projects/crash-course/nest_typerom/dist/task/entities/task.entity.js',
        '/Users/orahmoun/projects/crash-course/nest_typerom/dist/user/entities/user.entity.js'
    ],
    synchronize: true,
    logging: true
};

