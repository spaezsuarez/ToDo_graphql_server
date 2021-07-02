import { parseString } from '../functions/proccesData';

export default class ItemTask{

    private _id:number;
    private isDone:boolean;
    private text:string;
    
    public constructor(_id:number, isDone:boolean,text:string){
        this._id = _id;
        this.isDone = isDone;
        this.text = text;
    }

    public setID(_id:number):void{
        this._id = _id;
    }

    public getID():number{
        return this._id;
    }

    public getIsDone():boolean{
        return this.isDone;
    }

    public getText():string{
        return this.text;
    }

    public toSqlInput(): any[] {
       return [parseString(this._id),parseString(this.isDone),parseString(this.text)];
    }
}