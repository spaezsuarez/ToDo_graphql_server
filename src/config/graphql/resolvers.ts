import { IResolvers } from 'graphql-tools';
import MongoConnection from '../../db/MongoConection';
import Task from '../../models/Task';
import User from '../../models/User';

let databaseConnection = new MongoConnection();

export const resolvers:IResolvers = {
    Query:{
        getUser: (_:any,{ user }) => { return databaseConnection.getOneUser(user) },
        getUsers: async () => { return await databaseConnection.getUsers(); }
    },
    Mutation:{
        createUser: async (_:any,{ userInput }) => {
            let user:User = new User(userInput.name,userInput.password);
            return await databaseConnection.createUser(user);
        },
        createTask: async (_:any,{ idUser,taskInput }) => {
            let task:Task = new Task(taskInput.title,taskInput.description,taskInput.isDone,taskInput.startDate,taskInput.endDate,taskInput.itemsTasks);
            return await databaseConnection.createTask(idUser,task);
        }
    }

}