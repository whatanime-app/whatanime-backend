import { AnimeMapper } from '../../database/mappers/anime-mapper';
import { JikanClient } from '../client/jikan.client';

import { AnimesRepository } from '@app/repositories/animes-repository';
import { catchException } from '@common/errors/catch.exception';
import { Injectable } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { map, tap } from 'rxjs';

@Injectable()
export class GetAnimeByTitle {
  @InjectPinoLogger(GetAnimeByTitle.name) private readonly logger: PinoLogger;
  constructor(private jikanClient: JikanClient, private animesRepository: AnimesRepository) {}

  async execute(title: string) {
    const animes = await this.animesRepository.findByTitle(title);
    if (animes) {
      this.logger.info(animes, 'Animes por título encontrados no bando de dados');
      return animes;
    }

    return this.jikanClient.getAnimesByTitleOnJikan(title).pipe(
      map((animes) => animes.map((anime) => AnimeMapper.toPrisma(anime))),
      tap((animes) => this.logger.info(animes, 'Animes por título salvos no bando de dados')),
      catchException((error) => this.logger.error({ error }, 'Erro ao salvar animes no banco de dados')),
    );
  }
}
