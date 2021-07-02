import { IResolvers } from 'graphql-tools';
import { Date } from 'graphql-tools-types';
import { Dao } from '../../db/Dao';

let databaseConnection:Dao = new Dao();

export const resolvers:IResolvers = {

    Date:Date({name: "Date" }),

    Query:{
        authUser: (_:any,{ user }) => { return databaseConnection.auth(user); },
        getUsers: async () => { return await databaseConnection.getUsers(); }
    },
    Mutation:{
        createUser: async (_:any,{ userInput }) => {
            return await databaseConnection.createUser(userInput);
        },
        createTaskData: async (_:any,{ idUser,taskInput }) => {
            return await databaseConnection.createTask(idUser,taskInput);
        },
        createItemTask: async (_:any,{ idTask,itemTaskInput })=>{
            return await databaseConnection.createItemTask(idTask,itemTaskInput);
        },
        updateUserInfo: async (_:any,{ idUser,userData }) => {
            return databaseConnection.updateUser(idUser,userData);
        },
        updateTaskInfo: async (_:any,{ idTask,taskData }) => {
            return await databaseConnection.updateTask(idTask,taskData);
        },
        updateItemTaskInfo: async (_:any,{ idTask,itemData }) => {
            return await databaseConnection.updateItemTask(idTask,itemData);
        }
    }

}