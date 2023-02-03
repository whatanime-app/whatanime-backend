import { AnimesRepository } from '@app/repositories/animes-repository';
import { Anime } from '@prisma/client';

export class InMemoryAnimeRepository implements AnimesRepository {
  private animes: Anime[] = [];

  async create(anime: Anime): Promise<void> {
    this.animes.push(anime);
  }
}
