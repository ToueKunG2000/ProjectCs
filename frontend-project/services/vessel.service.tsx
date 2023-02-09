import { AxiosResponse } from "axios";
import { CheckLogMonthYearForm, VesselForm } from "../component/common/interface";
import instance from "./../axios";
import { UpdateForm } from "./../component/common/interface";

export class VesselService {
  async createReport(data: VesselForm) {
    data.currentPosition = 2;
    const res = await instance({
      method: "put",
      url: "/createReport",
      data: data,
    });
    return res;
  }
  async resetReport(data: VesselForm){
    const res = await instance({
      method: "put",
      url: "/resetReport",
      data: data,
    });
    return res;
  }
  
  async updateReport(data: UpdateForm) {
    const res = await instance({
      method: "put",
      url: "/updateReport",
      data: data,
    });
    return res;
  }

  async addToLogVessel(data:VesselForm){
    const res = await instance({
      method: "post",
      url: "/addToLog",
      data: data,
    });
    return res;
  }

  async getDataVessel(userId: number) {
    const res = await instance.get("/checkUser", {
      params: { userId: userId },
    });
    return res;
  }

  async getVesselInfo(vesId: number){
    const res = await instance.get<VesselForm>("/getDataVessel",{
      params: {vesId: vesId},
    });
    return res;
  }

  async checkMonthYear(monthYear: string){
    const res = await instance.get("/checkMonthYear",{
      params: {monthYear: monthYear},
    });
    return res;
  }

  async getLogVessel(request: CheckLogMonthYearForm){
    return await instance<VesselForm>({
      method: "post",
      url: "/getDataLog",
      data: request,
    })
  }
  async getLogVesselList(request: CheckLogMonthYearForm){
    return await instance<VesselForm[]>({
      method:"post",
      url:"/getLogVesselList",
      data: request,
    })
  }
  async getDropdownVessel(){
    return await instance.get("/getDropdownVessel");
  }

  async getVesselStatus(){
    return await instance.get<VesselForm[]>("/getStatusVessel");
  }
  async changeVesselStatus(request: VesselForm){
    return await instance({
      method: "post",
      url:"/",
      data: request,
    })
  }
}
