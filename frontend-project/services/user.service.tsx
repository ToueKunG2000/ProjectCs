import { UserForm } from "../component/common/interface";
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
}