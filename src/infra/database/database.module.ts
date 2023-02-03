import { PrismaService } from './prisma/prisma.service';
import { PrimaAnimesRepository } from './prisma/repositories/prisma-animes-repository';

import { AnimesRepository } from '@app/repositories/animes-repository';
import { Module } from '@nestjs/common';

@Module({
  providers: [PrismaService, { provide: AnimesRepository, useClass: PrimaAnimesRepository }],
  exports: [AnimesRepository],
})
export class DatabaseModule {}
