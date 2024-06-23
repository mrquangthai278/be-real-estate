import { NestFactory } from "@nestjs/core";
import { ApplicationModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  // Nest options
  const appOptions = { cors: true };

  // Nest installation
  const app = await NestFactory.create(ApplicationModule, appOptions);
  app.setGlobalPrefix(process.env.NODE_APP_BASE_PATH || "api");

  // Swagger options
  const options = new DocumentBuilder()
    .setTitle(process.env.NODE_APP_TITLE)
    .setDescription(process.env.NODE_APP_DESCRIPTION)
    .setVersion(process.env.NODE_APP_VERSION)
    .setBasePath(process.env.NODE_APP_BASE_PATH || "api")
    .addBearerAuth()
    .build();

  // Swagger installation
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(
    process.env.NODE_APP_DOCUMENTS_PATH || "/docs",
    app,
    document
  );

  await app.listen(process.env.NODE_APP_PORT || "8080");
}

bootstrap();
