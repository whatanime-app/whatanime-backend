import { DatabaseModule } from '@infra/database/database.module';
import { HttpModule } from '@infra/http/http.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    HttpModule,
    DatabaseModule,
    ConfigModule.forRoot(),
    LoggerModule.forRoot({
      pinoHttp: {
        redact: {
          remove: true,
          paths: ['pid', 'responseTime', 'res.headers', 'req.headers'],
        },
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
          },
        },
      },
    }),
  ],
})
export class AppModule {}
