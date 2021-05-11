import Task from './Task';

export default class User{

    public _id: string | number;
    private name:string;
    private password:string;
    private tasks: Task[];

    public constructor (name:string,password:string){
        this.name = name;
        this.password = password;
        this.tasks = [];
    }

    public setTasks(tasks:Task[]):void{
        this.tasks = tasks;
    }

    public setId(id:string):void{
        this._id = id;
    }

    public getId():string | number{
        return this._id;
    }

    public getName():string{
        return this.name;
    }

    public getTasks():Task[]{
        return this.tasks;
    }

    public getPassword():string{
        return this.password;
    }

}