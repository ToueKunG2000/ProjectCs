import { VesselForm } from "../component/common/interface";
import instance from "./../axios";

export class VesselService {
  async createReport(data: VesselForm) {
    const dateNow = new Date();
    data.monthYear = dateNow.toLocaleString("th-TH", { month: "2-digit", year: "numeric" });
    data.currentPosition = 2;
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
