type Pool = {
    max: number;
    min: number;
    acquire: number;
    evict: number;
    idle: number;
};

export type Connection = {
    pool: Pool;
    database: string;
    user: string;
    password: string;
    host: string;
    port: number;
};
