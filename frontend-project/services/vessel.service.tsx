import instance from "./../axios";

export class VesselService{
    async createReport(data: any){
        return instance.post('/createReport',{
            data: data
        });
    }
}