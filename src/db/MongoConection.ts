//Modelos de negocio
import User from '../models/User';
import Task from '../models/Task';
import ItemTask from '../models/ItemTask';
//Schemas de la base de datos
import { ItemModel } from './schemas/itemTaskSchema';
import { TaskModel  } from './schemas/TaskSchema';
import { UserModel } from './schemas/UserSchema';

export default class MongoConnection {

    public async getOneUser(data:any):Promise<User>{
        let userMongo:any = await UserModel.findOne({name:data.name,password:data.password}).populate('tasks').exec();
        let temp:User = new User(userMongo.name,userMongo.password);
        temp.setId(userMongo._id);
        temp.setTasks(userMongo.tasks);
        return temp;
    }

    public getUsers():Promise<User[]>{
        return UserModel.find().then((users:any[]) => {
            let arrayUsers:User[] = [];
            for(let e of users){
                let temp:User = new User(e.name,e.password);
                temp.setId(e._id);
                temp.setTasks(e.tasks);
                arrayUsers.push(temp);
            }
            return arrayUsers;

        }).catch( () => {return []} );
    }

    public async createUser(user:User):Promise<User>{
        const dataUser = new UserModel(user);
        let result = await dataUser.save();
        user.setId(result._id);
        return user;
    }

    public async createTask(idUser:string,task:Task):Promise<Task>{
        const taskData = new TaskModel(task);
        let result:any = await taskData.save();
        let user:any = await UserModel.findOne({_id:idUser});
        user.tasks.push(result._id);
        await user.save();
        return task;
    }

    public async createItemTask(idTask:string,itemTask:ItemTask):Promise<ItemTask>{
        const itemTaskData = new ItemModel(itemTask);
        let result:any = await itemTaskData.save();
        let task:any = await TaskModel.findOne({_id:idTask});
        task.itemTasks.push(result._id);
        await task.save();
        return itemTask;
    }

    public async updateUser(userData:User):Promise<User>{
        let user:any = await UserModel.findOne({_id:userData.getId()});
        for(let key in user){
            if(userData.toObject().hasOwnProperty(key)){
                user[key] = userData[key];
            }
        }
        await user.save();
        return userData;
    }

    public async updateTask(taskData:Task):Promise<any>{
        let task:any = await TaskModel.findOne({_id:taskData.getId()});
        for(let key in task){
            if(taskData.toObject().hasOwnProperty(key)){
                task[key] = taskData[key];
            }
        }
        await task.save();
        return taskData;
    }

    public async updateItemTask(idTask:string,data:ItemTask):Promise<any>{
        let task:any = await TaskModel.findOne({_id:idTask});
        let tempItem = task.itemTasks[data.getID()];
        let itemTask = await ItemModel.findOneAndUpdate({_id:tempItem},{id:data.getID(),isDone:data.getIsDone(),text:data.getText()});
        return itemTask;
    }

    

}