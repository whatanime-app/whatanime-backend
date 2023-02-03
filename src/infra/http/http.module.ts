import { AnimechanClient } from './client/animechan.client';
import { JikanClient } from './client/jikan.client';
import { JikanController } from './controllers/jikan.controller';
import { QuoteController } from './controllers/quote.controller';
import { GetAnimeById } from './use-cases/get-anime-by-id';
import { GetAnimeByTitle } from './use-cases/get-anime-by-title';
import { GetAnimeRandom } from './use-cases/get-random-anime';

import { DatabaseModule } from '@infra/database/database.module';
import { HttpModule as AxiosHttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

@Module({
  imports: [AxiosHttpModule, DatabaseModule],
  controllers: [JikanController, QuoteController],
  providers: [JikanClient, AnimechanClient, GetAnimeRandom, GetAnimeByTitle, GetAnimeById],
})
export class HttpModule {}
