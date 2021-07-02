import { createPool, Pool } from 'mysql2';
import { config } from 'dotenv'
import { resolve } from 'path';

export const getDataBaseConnection = (): Pool => {

    if (process.env.NODE_ENV === 'development')
        config({ path: resolve('.env') });

    const DATABASE_KEYS: any = {
        connectionLimit: 100,
        host: process.env.HOST_DATABASE,
        user: process.env.USER_DATABASE,
        password: process.env.PASSWORD_DATABASE,
        database: process.env.DATABASE,
        port: 3306,
    }

    const pool:Pool = createPool(DATABASE_KEYS);

    pool.getConnection((error, connection) => {
        if (connection) 
            connection.release();
        else 
            throw error;
        
    });

    return pool;
}


