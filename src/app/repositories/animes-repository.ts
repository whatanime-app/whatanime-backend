import { Anime } from '@prisma/client';

export abstract class AnimesRepository {
  abstract create(anime: Anime): Promise<void>;
  abstract findByMalId(malId: number): Promise<Anime | null>;
  abstract findByTitle(title: string): Promise<Anime[] | null>;
}
