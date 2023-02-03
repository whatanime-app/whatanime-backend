import { AnimeMapper } from '../../database/mappers/anime-mapper';
import { JikanClient } from '../client/jikan.client';

import { AnimesRepository } from '@app/repositories/animes-repository';
import { catchException } from '@common/errors/catch.exception';
import { Injectable } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { map, tap } from 'rxjs';

@Injectable()
export class GetAnimeById {
  @InjectPinoLogger(GetAnimeById.name) private readonly logger: PinoLogger;
  constructor(private jikanClient: JikanClient, private animesRepository: AnimesRepository) {}

  async execute(malId: number) {
    const anime = await this.animesRepository.findByMalId(malId);

    if (anime) {
      this.logger.info(anime, 'Anime por id encontrado no bando de dados');
      return anime;
    }

    return this.jikanClient.getAnimeByIdOnJikan(malId).pipe(
      map((response) => AnimeMapper.toPrisma(response)),
      tap(() => this.logger.info('Anime por ID salvo no bando de dados')),
      catchException((error) => this.logger.error({ error }, 'Erro ao salvar anime no banco de dados')),
    );
  }
}
