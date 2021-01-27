
import { Query, Resolver } from "@nestjs/graphql";
import { User } from "./user.schema";
import { UserService } from "./user.service";

@Resolver()
export class UserResolver{
    
    constructor (private readonly userService:UserService){}

    @Query(()=>[User])
    async Users(){
        return await this.userService.getUsers();
    }

}