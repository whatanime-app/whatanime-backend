import { IResponseAnime } from '../interfaces/anime-interface';

import { catchException } from '@common/errors/catch.exception';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class JikanClient {
  @InjectPinoLogger(JikanClient.name) private readonly logger: PinoLogger;

  private jikanAPI = 'https://api.jikan.moe/v4';

  constructor(private httpService: HttpService) {}

  getAnimesByTitleOnJikan(title: string): Observable<IResponseAnime[]> {
    return this.httpService.get(`${this.jikanAPI}/anime?q=${title}&order_by=score&&sort=desc`).pipe(
      map(({ data: results }) => {
        const data: IResponseAnime[] = results.data;
        return data.map((response) => response);
      }),
      catchException((error) => this.logger.error({ error }, 'Erro ao buscar animes por título')),
    );
  }

  getAnimeByIdOnJikan(mal_id: number): Observable<IResponseAnime> {
    return this.httpService.get(`${this.jikanAPI}/anime/${mal_id}`).pipe(
      map(({ data }) => data.data),
      catchException((error) => this.logger.error({ error }, 'Erro ao buscar animes por mal_id')),
    );
  }

  getAnimeRandom(): Observable<IResponseAnime> {
    return this.httpService.get(`${this.jikanAPI}/random/anime`).pipe(
      map(({ data }) => data.data),
      catchException((error) => this.logger.error({ error }, 'Erro ao buscar anime random')),
    );
  }

  getAnimeTop(): Observable<IResponseAnime[]> {
    return this.httpService.get(`${this.jikanAPI}/top/anime`).pipe(
      map(({ data }) => data),
      catchException((error) => this.logger.error({ error }, 'Erro ao buscar top ranking')),
    );
  }
}
