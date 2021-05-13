export default class ItemTask{

    private id:number;
    private isDone:boolean;
    private text:string;
    
    public constructor(id:number, isDone:boolean,text:string){
        this.id = id;
        this.isDone = isDone;
        this.text = text;
    }

    public getID():number{
        return this.id;
    }

    public getIsDone():boolean{
        return this.isDone;
    }

    public getText():string{
        return this.text;
    }
}