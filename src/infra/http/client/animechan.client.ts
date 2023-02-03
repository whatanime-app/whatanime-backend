import { IResponseQuote } from '../interfaces/quote-interface';

import { catchException } from '@common/errors/catch.exception';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AnimechanClient {
  @InjectPinoLogger(AnimechanClient.name) private readonly logger: PinoLogger;

  private animeChan = 'https://animechan.vercel.app/api';

  constructor(private httpService: HttpService) {}

  getRandomAnimeQuote(): Observable<IResponseQuote> {
    return this.httpService.get(`${this.animeChan}/random`).pipe(
      map(({ data }: AxiosResponse<IResponseQuote>) => data),
      catchException((error) => this.logger.error({ error }, 'Erro ao buscar uma frase aleatória')),
    );
  }

  getAnimesQuoteByTitle(title: string): Observable<IResponseQuote[]> {
    return this.httpService.get(`${this.animeChan}/quotes/anime?title=${title}`).pipe(
      map(({ data }) => data),
      catchException((error) => this.logger.error({ error }, 'Erro ao buscar uma frase aleatória')),
    );
  }
}
