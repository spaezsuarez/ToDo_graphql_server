import { model,Schema } from 'mongoose';

const itemTask:Schema = new Schema({
    id:{type:Number,required:true},
    isDone:{type:Boolean,required:true},
    text:{type:String,required:true}
});

export const itemModel = model('ItemTask',itemTask);