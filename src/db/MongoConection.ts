//Modelos de negocio
import User from '../models/User';
import Task from '../models/Task';
import ItemTask from '../models/ItemTask';
//Schemas de la base de datos
import { ItemModel } from './schemas/itemTaskSchema';
import { TaskModel  } from './schemas/TaskSchema';
import { UserModel } from './schemas/UserSchema';

export default class MongoConnection {

    public async getOneUser(data:any):Promise<User|any>{
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
        let { _id } = await dataUser.save();
        user.setId(_id);
        return user;
    }

    public async updateUser(userData:User):Promise<any>{
        let user:any = await UserModel.findOne({_id:userData.getId()});
        for (let clave in user) {
            if (userData.hasOwnProperty(clave)) {
               user[clave] = userData[clave];
            }
        }
        user.save();
        return user;
    }

    public async createTask(idUser:string,task:Task):Promise<Task>{
        const taskData = new TaskModel(task);
        let dataTask:any = await taskData.save();
        let user:any = await UserModel.findOne({_id:idUser});
        user.tasks.push(dataTask._id);
        await user.save();
        return task;
    }

}