import { AnimechanClient } from '../client/animechan.client';

import { Controller, Get, Param } from '@nestjs/common';

@Controller('/quote')
export class QuoteController {
  constructor(private quote: AnimechanClient) {}

  @Get('/random')
  getRandomAnimeQuote() {
    return this.quote.getRandomAnimeQuote();
  }

  @Get('/from/title/:title')
  getAnimesQuoteByTitle(@Param('title') title: string) {
    return this.quote.getAnimesQuoteByTitle(title);
  }
}
