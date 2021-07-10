import User from '../models/User';
import { hash } from 'bcrypt';

export const updateObjectUser =  async (originalUser:any,newInformationUser:any):Promise<User> => {

    if(newInformationUser.password){
        return hash(newInformationUser.password,Number(process.env.SALTS)).then((newHash) => {
            let user:User = new User();
            user.setID(originalUser._idUser);
            user.setPassword(newHash);
            user.setName((newInformationUser.name)?newInformationUser.name:originalUser.name);
            user.setEmail((newInformationUser.email)?newInformationUser.email:originalUser.email);
            return user;
        });
    }else{
        let user:User = new User();
        user.setID(originalUser._idUser);
        user.setPassword(originalUser.password);
        user.setName((newInformationUser.name)?newInformationUser.name:originalUser.name);
        user.setEmail((newInformationUser.email)?newInformationUser.email:originalUser.email);
        return user;
    }
}