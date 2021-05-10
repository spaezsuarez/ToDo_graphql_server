import { IResolvers } from 'graphql-tools';
import MongoConnection from '../../db/MongoConection';

let databaseConnection = new MongoConnection();

export const resolvers:IResolvers = {
    Query:{
        getTasks:() => { return {} },
        getUsers:() => { return {"name":"Sergio"} }
    },

}