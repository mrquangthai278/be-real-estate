import { Get, Controller } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  root(): string {
    return `${process.env.NODE_APP_TITLE} running properly!`;
  }
}
