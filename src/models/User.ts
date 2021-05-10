import Task from './Task';

export default class User{

    private id: string;
    private name:string;
    private tasks: Task[];

    public constructor(id:string, name:string){
        this.id = id;
        this.name = name;
        this.tasks = [];
    }

    public getID():string{
        return this.id;
    }

    public getName():string{
        return this.name;
    }

    public getTasks():Task[]{
        return this.tasks;
    }

}