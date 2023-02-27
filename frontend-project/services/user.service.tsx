import { AddUserForm, AddVesselForm, UserForm } from "../component/common/interface";
import instance from "./../axios";
import { VesselForm } from "./../component/common/interface";

export class UserServices {

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
  async getUserDropdown(positionId:number){
    const res = instance.get("/getUserDropdown",{
      params:{positionId: positionId}
    })
    return res;
  }

  async changeVesId(userId:number,vesId:number){
    const res = instance.get("/changeVesId",{
      params: { userId: userId, vesId: vesId }
    })
    return res;
  }

  async checkUserIdInVessel(request: AddVesselForm){
    const res = instance({
      method:"post",
      url:"/checkUserIdInVessel",
      data: request
    })
    return res;
  }
}