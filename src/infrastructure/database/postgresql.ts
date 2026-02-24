import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';
import { UserModel } from './user.model';
import { Connection } from './types';
import { DatabaseConnectionError } from '../errors';

export class DataBase {
    public initialized: boolean = false;
    protected sequelize: Sequelize;

    constructor(configuration: Connection) {
        this.sequelize = new Sequelize({
            ...configuration,
            dialect: PostgresDialect,
            models: [UserModel],
        });
    }

    async startConnection(dbSync?: boolean): Promise<void> {
        try {
            if (this.initialized) return;
            await this.sequelize.authenticate();
            //just in local
            if (dbSync === true) {
                await this.sequelize.sync({
                    force: false,
                    alter: false,
                });
            }
            this.initialized = true;
        } catch (error) {
            throw new DatabaseConnectionError();
        }
    }
}
