import { IResolvers } from 'graphql-tools';
import MongoConnection from '../../db/MongoConection';
import ItemTask from '../../models/ItemTask';
import Task from '../../models/Task';
import User from '../../models/User';

let databaseConnection:MongoConnection = new MongoConnection();

export const resolvers:IResolvers = {
    Query:{
        getUser: (_:any,{ user }) => { return databaseConnection.getOneUser(user); },
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
        },
        createItemTask:async (_:any,{ idTask,itemTaskInput })=>{
            let item:ItemTask = new ItemTask(itemTaskInput.id,itemTaskInput.isDone,itemTaskInput.text);
            return await databaseConnection.createItemTask(idTask,item);
        },
        updateUser:async (_:any,{ idUser,userData }) => {
            let user:User = new User(userData.name,userData.password);
            user.setTasks(userData.tasks);
            return databaseConnection.updateUser(idUser,user);
        }
    }

}