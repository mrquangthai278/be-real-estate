import { Module } from "@nestjs/common";
// import { ConfigModule } from "@nestjs/config";

import { AppController } from "./app.controller";
import { ArticleModule } from "./article/article.module";
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection } from "typeorm";
import { ProfileModule } from "./profile/profile.module";
import { TagModule } from "./tag/tag.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "123456",
      database: "nestjsrealworld",
      entities: ["src/**/*.entity.ts"],
      synchronize: true,
    }),
    // ConfigModule.forRoot(),
    ArticleModule,
    UserModule,
    ProfileModule,
    TagModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class ApplicationModule {
  constructor(private readonly connection: Connection) {}
}
