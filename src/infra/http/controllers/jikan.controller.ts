import { JikanClient } from '../client/jikan.client';
import { GetAnimeById } from '../use-cases/get-anime-by-id';
import { GetAnimeByTitle } from '../use-cases/get-anime-by-title';
import { GetAnimeRandom } from '../use-cases/get-random-anime';

import { Controller, Get, Param } from '@nestjs/common';

@Controller('/jikan')
export class JikanController {
  constructor(
    private jikan: JikanClient,
    private getAnimeRandom: GetAnimeRandom,
    private getAnimeByTitle: GetAnimeByTitle,
    private getAnimeById: GetAnimeById,
  ) {}

  @Get('/random')
  animeRandom() {
    return this.getAnimeRandom.execute();
  }

  @Get('/from/mal_id/:mal_id')
  getAnimeByIdOnJikan(@Param('mal_id') mal_id: number) {
    return this.getAnimeById.execute(Number(mal_id)); // TODO VALIDAR SE ESTA ENTRANDO SEMPRE NUMERO
  }

  @Get('/from/title/:title')
  getAnimesByTitleOnJikan(@Param('title') title: string) {
    return this.getAnimeByTitle.execute(title);
  }

  @Get('/top')
  getAnimeTop() {
    return this.jikan.getAnimeTop();
  }
}
