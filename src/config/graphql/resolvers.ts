import { IResolvers } from 'graphql-tools';
import { Date } from 'graphql-tools-types';
import MongoConnection from '../../db/MongoConection';
import ItemTask from '../../models/ItemTask';
import Task from '../../models/Task';
import User from '../../models/User';

let databaseConnection:MongoConnection = new MongoConnection();

export const resolvers:IResolvers = {

    Date:Date({name: "Date" }),

    Query:{
        getUser: (_:any,{ user }) => { return databaseConnection.getOneUser(user); },
        getUsers: async () => { return await databaseConnection.getUsers(); }
    },
    Mutation:{
        createUser: async (_:any,{ userInput }) => {
            let user:User = new User(userInput.name,userInput.password);
            return await databaseConnection.createUser(user);
        },
        createTaskData: async (_:any,{ idUser,taskInput }) => {
            let task:Task = new Task(taskInput.title,taskInput.description,taskInput.isDone,taskInput.startDate,taskInput.endDate,taskInput.itemsTasks);
            let result =  await databaseConnection.createTask(idUser,task);
            return result;
        },
        createItemTask:async (_:any,{ idTask,itemTaskInput })=>{
            let item:ItemTask = new ItemTask(itemTaskInput.id,itemTaskInput.isDone,itemTaskInput.text);
            return await databaseConnection.createItemTask(idTask,item);
        },
        updateUserInfo:async (_:any,{ idUser,userData }) => {
            let user:User = new User(userData.name,userData.password);
            user.setTasks(userData.tasks);
            user.setId(idUser);
            return databaseConnection.updateUser(user);
        },
        updateTaskInfo:async (_:any,{ idTask,taskData }) => {
            let task:Task = new Task(taskData.title,taskData.description,taskData.isDone,taskData.startDate,taskData.endDate,taskData.itemsTasks);
            task.setId(idTask);
            return await databaseConnection.updateTask(task);
        },
        updateItemTaskInfo:async (_:any,{ idTask,itemData }) => {
            let item:ItemTask = new ItemTask(itemData.id,itemData.isDone,itemData.text);
            return await databaseConnection.updateItemTask(idTask,item);
        }
    }

}