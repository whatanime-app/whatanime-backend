import { JikanClient } from '../client/jikan.client';
import { IResponseAnime } from '../interfaces/anime-interface';

import { GetAnimeRandom } from './get-random-anime';

import { AnimesRepository } from '@app/repositories/animes-repository';
import { DatabaseModule } from '@infra/database/database.module';
import { TestingModule } from '@nestjs/testing';
import { formattedAnimeRandomMock, getAnimeRandomMock } from '@test/mock/get-anime-random-mock';
import { InMemoryAnimeRepository } from '@test/repositories/in-memory-animes-repository';
import { createTestingModule } from '@test/test.module';
import { Observable } from 'rxjs';

describe('Get Anime Random', () => {
  let getAnimeRandom: GetAnimeRandom;
  let jikanClient: JikanClient;

  beforeEach(async () => {
    const moduleRef: TestingModule = await createTestingModule({
      imports: [DatabaseModule],
      providers: [
        GetAnimeRandom,
        JikanClient,
        { provide: AnimesRepository, useClass: InMemoryAnimeRepository },
      ],
    }).compile();

    getAnimeRandom = moduleRef.get<GetAnimeRandom>(GetAnimeRandom);
    jikanClient = moduleRef.get<JikanClient>(JikanClient);
  });

  test('get anime random definido e instanciado corretamente', () => {
    expect(getAnimeRandom).toBeDefined();
    expect(jikanClient).toBeDefined();
  });

  test('cria retorno de anime random e salva no banco de dados', (done) => {
    jest.spyOn(jikanClient, 'getAnimeRandom').mockReturnValue(
      new Observable<IResponseAnime>((subscribe) => {
        subscribe.next(getAnimeRandomMock);
        subscribe.complete();
      }),
    );

    //TODO FINALIZAR TESTE

    done();
  });
});
