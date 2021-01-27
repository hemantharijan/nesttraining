import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { userModule } from './user/user.module';


@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:NCDn09ABBhFBNTHo@cluster1.rba3z.mongodb.net/test?authSource=admin&replicaSet=atlas-69u4y3-shard-0&w=majority',
      {
        useCreateIndex:true,
        useFindAndModify:false,
        useNewUrlParser:true,
        useUnifiedTopology:true
      }),
      GraphQLModule.forRoot({
        autoSchemaFile: true,
      }),
      userModule,
    ],
  // controllers: [],
  providers: [],
})
export class AppModule {}
