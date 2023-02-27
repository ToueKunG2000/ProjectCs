import { UserForm } from "../component/common/interface";
import instance from "./../axios";

export class LoginServices{
    async checkUser(username: string, password: string) {
        const res = instance.get<UserForm>("/login", {
          params: {
            username: username,
            password: password,
          },
        })
        return res;
      }
    async checkUsernameDup(username:string){
        const res = instance.get("/checkUsernameDup",{
            params:{
                username: username
            },
        })
        return res;
    }
}