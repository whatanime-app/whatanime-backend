import { HttpModule } from '@nestjs/axios';
import { ModuleMetadata } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test } from '@nestjs/testing';
import merge from 'deepmerge';
import { LoggerModule } from 'nestjs-pino';

export function createTestingModule(metadata: ModuleMetadata) {
  const moduleRef = Test.createTestingModule(
    merge(
      {
        imports: [
          HttpModule,
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
        exports: [HttpModule],
      } as ModuleMetadata,
      metadata,
    ),
  );

  return moduleRef;
}
