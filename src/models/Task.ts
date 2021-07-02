import ItemTask from './ItemTask';
import { parseString } from '../functions/proccesData';

export default class Task{

    private _id:string;
    private title:string;
    private description:string;
    private isDone:number;
    private startDate:Date;
    private endDate:Date;
    private itemsTasks:ItemTask[];

    constructor(title:string, description:string, isDone:number, startDate:Date, endDate:Date, itemsTasks:ItemTask[]){
        this.title = title;
        this.description = description;
        this.isDone = isDone;
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
        this.itemsTasks = itemsTasks;
    }

    public getID():string{
        return this._id;
    }

    public getTitle():string{
        return this.title;
    }

    public getDescription():string{
        return this.description;
    }

    public getIsDone():number{
        return this.isDone;
    }

    public getStartDate():string{
       
        return this.startDate.toLocaleDateString().split('/').reverse().join('-');
    }

    public getEndDate():string{
        return this.endDate.toLocaleDateString().split('/').reverse().join('-');
    }

    public getItemsTasks():ItemTask[]{
        return this.itemsTasks;
    }

    public setID(id:string):void{
        this._id = id;
    }

    public setTitle(title:string):void{
        this.title = title;
    }

    public setDescription(description:string):void{
        this.description = description;
    }
    
    public setIsDone(isDone:number):void{
        this.isDone = isDone;
    }

    public setStartDate(startDate:Date):void{
        this.startDate = startDate;
    }

    public setEndDate(endDate:Date):void{
        this.endDate = endDate;
    }

    public setItemsTasks(itemsTasks:ItemTask[]):void{
        this.itemsTasks = itemsTasks;
    }

    public toSqlInput():any[]{
        return [parseString(this._id),parseString(this.title),
               parseString(this.description),parseString(this.isDone),
               parseString(this.getStartDate()),parseString(this.getEndDate())];
    }

}