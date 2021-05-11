import Task from './Task';

export default class User{

    public id: string | number;
    private name:string;
    private password:string;
    private tasks: Task[];

    public constructor(id:string | number, name:string,password:string){
        this.id = id;
        this.name = name;
        this.password = password;
        this.tasks = [];
    }

    public setTasks(tasks:Task[]):void{
        this.tasks = tasks;
    }

    public getId():string | number{
        return this.id;
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