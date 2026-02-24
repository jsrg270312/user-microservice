const { PG_DATABASE, PG_USER, PG_PASSWORD, PG_HOST, PG_PORT } = process.env;
export const configuration = {
    databaseConfig: {
        pool: {
            max: 2,
            min: 0,
            acquire: 3000,
            evict: 15000,
            idle: 0,
        },
        database: PG_DATABASE || '',
        user: PG_USER || '',
        password: PG_PASSWORD || '',
        host: PG_HOST || '',
        port: Number(PG_PORT) || 5432,
    },
};
