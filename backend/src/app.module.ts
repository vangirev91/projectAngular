import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import {ConfigModule,ConfigService} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_NAME, DB_HOST, DB_PASS, DB_PORT, DB_USER } from './config/constants';
import { MachineModule } from './machine/machine.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true
    }),
    
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get<string>(DB_HOST),
      port: +configService.get<number>(DB_PORT),
      username: configService.get<string>(DB_USER),
      password: configService.get<string>(DB_PASS),
      database: configService.get<string>(DB_NAME),
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging:false,
    }),
    inject: [ConfigService],
  }),
    
  MachineModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
