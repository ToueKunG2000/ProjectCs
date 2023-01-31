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

  async checkLogMonthYear(data: CheckLogMonthYearForm){
    const res = await instance({
      method: "post",
      url: "/checkLogMonthYear",
      data: data,
    });
    return res;
  }
}
