import Task from './Task';

export default class User{

    public id: string | number;
    private name:string;
    private tasks: Task[];

    public constructor(id:string | number, name:string){
        this.id = id;
        this.name = name;
        this.tasks = [];
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

}