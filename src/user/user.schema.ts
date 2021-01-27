import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types} from "mongoose";
import { type } from "os";


@ObjectType()
@Schema()
export class User{

    @Field(()=>ID)
    id: Types.ObjectId;

    @Field(type=> String)
    @Prop()
    name: string;

    @Field()
    @Prop()
    gender: string;

    @Field()
    @Prop()
    DOB: string;   
}

//this is for graphql type def
export type UserDocument = User & Document;

//this is for creating model in mongodb
export const UserSchema = SchemaFactory.createForClass(User);