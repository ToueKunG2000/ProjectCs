import Test from './user.json'
import instance from "./../axios";

export class UserServices{
    async getUser(username:string){
        const res = instance.get("/user");
        return  (await res).data;

    }
}
