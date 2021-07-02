import { MysqlConnection } from './MysqlConnection';
import { parseString } from '../functions/proccesData';
import { hash,compare } from 'bcrypt';
import User from '../models/User';
import Task from '../models/Task';
import ItemTask from '../models/ItemTask';

export class Dao{

    private databaseClient:MysqlConnection = new MysqlConnection();

    public async auth(userInput:any):Promise<User | any>{
        let user:User = new User();
        user.setEmail(userInput.email);
        user.setPassword(userInput.password);

        let data:any = await this.databaseClient.excuteQuery(`SELECT * FROM User WHERE email = '${user.getEmail()}';`);

        return compare(user.getPassword(),data[0].password).then((result) => {
            if(result){
                user.setID(data[0]._idUser);
                user.setName(data[0].name);
                user.setPassword(data[0].password);
                return user;
            }else{
                return null;
            }
        }); 
    }

    public async getUsers():Promise<User[]>{
        let data:any[] = await this.databaseClient.getAll('User');
        let users:User[] = [];

        data.forEach((element:any) => {
            let temp:User = new User();
            temp.setID(element._id);
            temp.setName(element.name);
            temp.setPassword(element.password);
            users.push(temp);
        });

        return users;
    }

    public async createUser(userInput:any):Promise<User>{
        let user:User = new User();

        return hash(userInput.password,Number(process.env.SALTS)).then((hashPass) => {
            user.setName(userInput.name);
            user.setID(`user_${Date.now()}`);
            user.setPassword(hashPass);
            user.setEmail(userInput.email);

            this.databaseClient.create('User',user.toSqlInput());

            return user;
        });
    }

    public async createTask(idUser:any,taskInput:any):Promise<Task>{
        let task:Task = new Task(taskInput.title,taskInput.description,taskInput.isDone,taskInput.startDate,taskInput.endDate,taskInput.itemsTasks);
        task.setID(`task_${Date.now()}`);
        let sqlInput:any[] = task.toSqlInput();
        sqlInput.push(parseString(idUser));
        await this.databaseClient.create('Task',sqlInput);
        return task;
    }

    public async createItemTask(idTask:any,itemTaskInput:any):Promise<ItemTask>{
        let itemTask:ItemTask = new ItemTask(itemTaskInput._id,itemTaskInput.isDone,itemTaskInput.text);
        let sqlInput:any[] = itemTask.toSqlInput();
        sqlInput.push(parseString(idTask));
        await this.databaseClient.create('ItemTask',sqlInput);
        return itemTask;
    }

    public updateUser(idUser:any,userData:any):User{
        return null;
    }

    public updateTask(idTask:any,taskData:any):Task{
        return null;
    }

    public updateItemTask(idTask:any,itemData:any):ItemTask{
        return null;
    }

}