import Task from './Task';
import { parseString } from '../functions/proccesData';

export default class User{

    public _id: string;
    private name:string;
    private email:string;
    private password:string;
    private tasks: Task[];

    public constructor (){
        this.tasks = [];
    }

    public setName(name:string):void{
        this.name = name;
    }

    public setEmail(email:string):void{
        this.email = email;
    }

    public setPassword(password:string):void{
        this.password = password;
    }

    public setTasks(tasks:Task[]):void{
        this.tasks = tasks;
    }

    public setID(id:string):void{
        this._id = id;
    }

    public getID():string{
        return this._id;
    }

    public getName():string{
        return this.name;
    }

    public getEmail():string{
        return this.email;
    }

    public getTasks():Task[]{
        return this.tasks;
    }

    public getPassword():string{
        return this.password;
    }

    public toSqlInput():any[]{
        return [parseString(this._id),parseString(this.email),parseString(this.name),parseString(this.password)];
    }

}