import { AddUserForm, UserForm } from "../component/common/interface";
import instance from "./../axios";

export class UserServices {
  async checkUser(username: string, password: string) {
    const res = instance.get<UserForm>("/login", {
      params: {
        username: username,
        password: password,
      },
    }).catch((error) => {
        console.log(error);
    });
    return res;
  }
  async getAllUser(){
    const res = instance.get<UserForm>("/getAllUser")
    return res;
  }
  async changeUserStatus(request: UserForm){
    const res = instance({
      method:'POST',
      url:"/changeUserStatus",
      data: request,
    });
    return res;
  }

  async addUser(request:AddUserForm){
    const res = instance({
      method: "post",
      url:"/addUser",
      data:request
    })
    return res;
  }
}