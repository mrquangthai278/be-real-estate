import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ConnectionOptions } from 'typeorm';

import envLocal from '../environments/environment';
import envProd from '../environments/environment.prod';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './products/entities/product.entity';
import { ProductsModule } from './products/products.module';

// const env = process.env.NODE_ENV === 'production' ? envProd : envLocal;
const env = envProd;
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [env],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return {
          ...env().database,
          entities: [Product],
          ssl: {
            rejectUnauthorized: false,
          },
        } as ConnectionOptions;
      },
    }),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
