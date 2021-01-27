import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "./user.schema";


@Injectable()
export class UserService{

    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<UserDocument>){}

    async getUsers(): Promise<UserDocument[]>{
        return await this.userModel.find();
    }
}