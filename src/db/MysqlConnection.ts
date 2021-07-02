import { Pool } from 'mysql2';
import { getDataBaseConnection } from '../config/server/dataBase';
import { getIdDB,getUpdateText,getValueText } from '../functions/proccesData';

export class MysqlConnection{

    private poolDatabase:Pool;

    public constructor(){
        this.poolDatabase = getDataBaseConnection();
    }

    public excuteQuery(query:string):Promise<any>{
        return new Promise((resolve,reject) => {
            this.poolDatabase.query(query,(error:any,data:any) => {
                if(error)
                    reject(error);
                else
                    resolve(data);
            });
        });
    }

    public async get(id:string,table:string):Promise<any>{
        return await this.excuteQuery(`SELECT * FROM ${table} WHERE ${getIdDB(table)} == ${id};`);
    }

    public async getAll(table:string):Promise<any>{
        return await this.excuteQuery(`SELECT * FROM ${table};`);
    }

    public async create(table:string,data:any):Promise<any>{
        return await this.excuteQuery(`INSERT INTO ${table} ${getValueText(data)}`);
    }

    public async delete(table:string,id:string):Promise<any>{
        return this.excuteQuery(`DELETE FROM ${table} WHERE ${getIdDB(table)} = ${id};`);
    }
 
    public async update(table:string,body:any,id:string):Promise<any>{
         return this.excuteQuery(`UPDATE ${table} SET ${getUpdateText(body)} WHERE ${getIdDB(table)} = ${id};`);
    }

}