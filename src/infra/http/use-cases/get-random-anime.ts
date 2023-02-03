import { AnimeMapper } from '../../database/mappers/anime-mapper';
import { JikanClient } from '../client/jikan.client';

import { AnimesRepository } from '@app/repositories/animes-repository';
import { catchException } from '@common/errors/catch.exception';
import { Injectable } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { map, switchMap, tap } from 'rxjs';

@Injectable()
export class GetAnimeRandom {
  @InjectPinoLogger(GetAnimeRandom.name) private readonly logger: PinoLogger;
  constructor(private jikanClient: JikanClient, private animesRepository: AnimesRepository) {}

  execute() {
    this.jikanClient.getAnimeRandom().pipe(
      switchMap(async (response) => {
        const anime = AnimeMapper.toPrisma(response);

        const existsInDatabase = await this.animesRepository.findByMalId(anime.malId);

        if (existsInDatabase) {
          return existsInDatabase;
        }

        await this.animesRepository.create(anime);
        return anime;
      }),
      tap(({ malId }) => this.logger.info({ malId }, 'Random anime salvo no bando de dados')),
      map((response) => response),
      catchException((error) => this.logger.error({ error }, 'Erro ao salvar anime no banco de dados')),
    );
  }
}
