import User from '../models/User';
import Task from '../models/Task';
import ItemTask from '../models/ItemTask';
import { model } from 'mongoose';

export default class MongoConnection {

    public constructor() {

    }

    public getUser():User{
        let user:User = new User(1,"Sergio Paez");;
        return user;
    }

    public createUser(user:User){

    }

   

    


}