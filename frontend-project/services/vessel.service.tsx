import { VesselForm } from "../component/common/interface";
import instance from "./../axios";

export class VesselService {
  async createReport(data: any) {
    console.log(data);
    const res = await instance({
        method: 'put',
        url: '/createReport',
        data: data,
    })
    return res;
  }
  async getDataVessel(userId: number) {
    const res = await instance.get("/checkUser", {
      params: { userId: userId },
    });
    return res;
  }
}
