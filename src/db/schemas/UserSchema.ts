import { model,Schema } from 'mongoose';

const UserSchema:Schema = new Schema({
    id:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    password:{type:String,required:true},
    tasks:[{type: Schema.Types.ObjectId,ref: 'Task'}]
});

export const userModel = model('User',UserSchema);