import Test from './user.json'

export class UserServices{
    async getUser(){
        const response = await require('./user.json');
        return response;
    }
}
