import { Module } from "@nestjs/common";

import { Connection } from "typeorm";
import { TypeOrmModule } from "@nestjs/typeorm";
import type { TypeOrmModuleOptions } from "@nestjs/typeorm";

import { AppController } from "./app.controller";

// Modules
import { ArticleModule } from "./article/article.module";
import { UserModule } from "./user/user.module";
import { TagModule } from "./tag/tag.module";

const options: TypeOrmModuleOptions = {
  type: (process.env.NODE_APP_DATABASE_TYPE || "mysql") as any,
  host: process.env.NODE_APP_DATABSE_HOST,
  port: Number(process.env.NODE_APP_DATABSE_PORT),
  username: process.env.NODE_APP_DATABSE_USERNAME,
  password: process.env.NODE_APP_DATABSE_PASSWORD,
  database: process.env.NODE_APP_DATABSE_NAME,
  entities: ["src/**/*.entity.ts"],
  synchronize: true,
};

const modules = [ArticleModule, UserModule, TagModule];

@Module({
  imports: [TypeOrmModule.forRoot(options), ...modules],
  controllers: [AppController],
  providers: [],
})
export class ApplicationModule {
  constructor(private readonly connection: Connection) {}
}
