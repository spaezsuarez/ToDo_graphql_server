import { IResolvers } from 'graphql-tools';
import MongoConnection from '../../db/MongoConection';
import User from '../../models/User';

let databaseConnection = new MongoConnection();

export const resolvers:IResolvers = {
    Query:{
        getTasks:() => { return {} },
        getUsers:async () => { return await databaseConnection.getUsers(); }
    },
    Mutation:{
        createUser:async (_:any,{ userInput }) => {
            let user:User = new User(userInput.id,userInput.name,userInput.password);
            return await databaseConnection.createUser(user);
        }
    }

}