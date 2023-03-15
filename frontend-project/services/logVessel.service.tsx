import { GraphLogVesselForm } from "../component/common/interface";
import instance from "./../axios";

export class LogVesselServices {
  async getDataLogVessel(request: GraphLogVesselForm) {
    const res = instance({
      method: "post",
      data: request,
      url: "/getColumnData",
    });
    return res;
  }
}
