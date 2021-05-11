import { model,Schema } from 'mongoose';

const UserSchema:Schema = new Schema({
    name:{type:String,required:true},
    password:{type:String,required:true},
    tasks:[{type: Schema.Types.ObjectId,ref: 'Task'}]
});

export const UserModel = model('User',UserSchema);