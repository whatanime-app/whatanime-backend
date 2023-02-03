import { formatSlug } from '@common/helpers/formatText';
import { IResponseAnime } from '@infra/http/interfaces/anime-interface';
import { Anime } from '@prisma/client';

export class AnimeMapper {
  static toPrisma(response: IResponseAnime): Anime {
    console.log(response);
    return {
      malId: Number(response.mal_id),
      title: response.title,
      slug: formatSlug(response.title),
      titleEnglish: response.title_english || null,
      titleJapanese: response.title_japanese || null,
      year: response.year || response.aired.prop.from?.year,
      score: response.score || null,
      type: response.type,
      source: response.source || null,
      imageUrl: response.images.webp.image_url || response.images.jpg.image_url,
      synopsis: response.synopsis,
      status: response.status,
      duration: response.duration,
      aired: response.aired.string || null,
      rating: response.rating || null,
      episodes: response.episodes || null,
    };
  }
}
