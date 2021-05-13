import ItemTask from './ItemTask';

export default class Task{

    private _id:string;
    private title:string;
    private description:string;
    private isDone:boolean;
    private startDate:Date;
    private endDate:Date;
    private itemsTasks:ItemTask[];

    constructor(title:string, description:string, isDone:boolean, startDate:Date, endDate:Date, itemsTasks:ItemTask[]){
        this.title = title;
        this.description = description;
        this.isDone = isDone;
        this.startDate = startDate;
        this.endDate = endDate;
        this.itemsTasks = itemsTasks;
    }

    public getId():string{
        return this._id;
    }

    public getTitle():string{
        return this.title;
    }

    public getDescription():string{
        return this.description;
    }

    public getIsDone():boolean{
        return this.isDone;
    }

    public getStartDate():Date{
        return this.startDate;
    }

    public getEndDate():Date{
        return this.endDate;
    }

    public getItemsTasks():ItemTask[]{
        return this.itemsTasks;
    }

    public setId(id:string):void{
        this._id = id;
    }

    public setTitle(title:string):void{
        this.title = title;
    }

    public setDescription(description:string):void{
        this.description = description;
    }
    
    public setIsDone(isDone:boolean):void{
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

    public toObject():Object{
        return {_id:this._id,description:this.description,isDone:this.isDone,itemsTasks:this.itemsTasks,endDate:this.endDate,startDate:this.startDate}
    }

}