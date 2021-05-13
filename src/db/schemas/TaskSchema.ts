import { model,Schema } from 'mongoose';

const TaskSchema:Schema = new Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    isDone:{type:Boolean,required:true},
    startDate:{type:Date,required:true},
    endDate:{type:Date,required:true},
    itemTasks:[{type: Schema.Types.ObjectId,ref: 'ItemTask'}]
});

export const TaskModel = model('Task',TaskSchema);