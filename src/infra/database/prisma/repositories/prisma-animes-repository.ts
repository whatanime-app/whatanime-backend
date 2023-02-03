import { PrismaService } from '../prisma.service';

import { AnimesRepository } from '@app/repositories/animes-repository';
import { Injectable } from '@nestjs/common';
import { Anime } from '@prisma/client';

@Injectable()
export class PrimaAnimesRepository implements AnimesRepository {
  constructor(private prismaService: PrismaService) {}

  async create(anime: Anime): Promise<void> {
    await this.prismaService.anime.create({
      data: anime,
    });
  }

  async findByMalId(malId: number): Promise<Anime | null> {
    return await this.prismaService.anime.findUnique({
      where: {
        malId,
      },
    });
  }

  async findByTitle(title: string): Promise<Anime[] | null> {
    return await this.prismaService.anime.findMany({
      where: {
        title: {
          contains: title,
        },
      },
    });
  }
}
