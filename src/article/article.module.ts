import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// Modules
import { UserModule } from "../user/user.module";

// Controllers
import { ArticleController } from "./article.controller";

// Services
import { ArticleService } from "./article.service";

// Middleware
import { AuthMiddleware } from "../user/auth.middleware";

// Enrities
import { ArticleEntity } from "./article.entity";
import { Comment } from "./comment.entity";
import { UserEntity } from "../user/user.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ArticleEntity, Comment, UserEntity]),
    UserModule,
  ],
  providers: [ArticleService],
  controllers: [ArticleController],
})
export class ArticleModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(
      { path: "articles/feed", method: RequestMethod.GET },

      { path: "articles", method: RequestMethod.POST },

      { path: "articles/:slug", method: RequestMethod.DELETE },

      { path: "articles/:slug", method: RequestMethod.PUT },

      { path: "articles/:slug/comments", method: RequestMethod.POST },

      { path: "articles/:slug/comments/:id", method: RequestMethod.DELETE },

      { path: "articles/:slug/favorite", method: RequestMethod.POST },

      { path: "articles/:slug/favorite", method: RequestMethod.DELETE }
    );
  }
}
