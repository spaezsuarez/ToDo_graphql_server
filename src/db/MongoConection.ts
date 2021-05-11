//Modelos de negocio
import User from '../models/User';
import Task from '../models/Task';
import ItemTask from '../models/ItemTask';
//Schemas de la base de datos
import { itemModel } from './schemas/itemTaskSchema';
import { taskModel  } from './schemas/TaskSchema';
import { userModel } from './schemas/UserSchema';

export default class MongoConnection {

    public getUser(id:any):Promise<User|any>{
        return userModel.findOne({_id:id}).then((user:any) => {
            let temp:User = new User(user._id,user.name,user.password);
            temp.setTasks(user.tasks);
            return temp;
        }).catch( () => {
            return {}
        });
    }

    public getUsers():Promise<User[]>{
        return userModel.find().then((users:any[]) => {
            let arrayUsers:User[] = [];
            for(let e of users){
                let temp:User = new User(e._id,e.name,e.password);
                temp.setTasks(e.tasks);
                arrayUsers.push(temp);
            }
            return arrayUsers;

        }).catch( () => {return []} );
    }

    public createUser(user:User):User{
        const dataUser = new userModel(user);
        dataUser.save();
        return user;
    }

    public updateUser(){

    }




}