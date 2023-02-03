import { IResponseAnime } from '@infra/http/interfaces/anime-interface';
import { Anime } from '@prisma/client';

export const getAnimeRandomMock: IResponseAnime = {
  mal_id: 27467,
  url: 'https://myanimelist.net/anime/27467/Yoligongju_Loopy',
  images: {
    jpg: {
      image_url: 'https://cdn.myanimelist.net/images/anime/3/66635.jpg',
      small_image_url: 'https://cdn.myanimelist.net/images/anime/3/66635t.jpg',
      large_image_url: 'https://cdn.myanimelist.net/images/anime/3/66635l.jpg',
    },
    webp: {
      image_url: 'https://cdn.myanimelist.net/images/anime/3/66635.webp',
      small_image_url: 'https://cdn.myanimelist.net/images/anime/3/66635t.webp',
      large_image_url: 'https://cdn.myanimelist.net/images/anime/3/66635l.webp',
    },
  },
  title: 'Yoligongju Loopy',
  title_english: 'Loopy, the Cooking Princess',
  title_japanese: '요리공주 루피',
  type: 'TV',
  source: 'Unknown',
  episodes: 6,
  status: 'Finished Airing',
  airing: false,
  aired: {
    from: '2012-01-01T00:00:00+00:00',
    to: null,
    prop: {
      from: {
        day: 1,
        month: 1,
        year: 2012,
      },
      to: {
        day: null,
        month: null,
        year: null,
      },
    },
    string: '2012',
  },
  duration: '5 min per ep',
  rating: 'G - All Ages',
  score: 5.68,
  scored_by: 121,
  rank: 10826,
  popularity: 15956,
  members: 331,
  favorites: 0,
  synopsis:
    'A spin-off Pororo series focusing around food, predominantly kimchi incorporated food. Loopy was the cooking expert in the original series so she explains the food and science by magically transforming into a Cooking Princess.',
  background: null,
  season: null,
  year: null,
};

export const formattedAnimeRandomMock: Anime = {
  malId: 27467,
  title: 'Yoligongju Loopy',
  slug: 'yoligongju-loopy',
  titleEnglish: 'Loopy, the Cooking Princess',
  titleJapanese: '요리공주 루피',
  year: 2012,
  score: 5.68,
  type: 'TV',
  source: 'Unknown',
  imageUrl: 'https://cdn.myanimelist.net/images/anime/3/66635.webp',
  synopsis:
    'A spin-off Pororo series focusing around food, predominantly kimchi incorporated food. Loopy was the cooking expert in the original series so she explains the food and science by magically transforming into a Cooking Princess.',
  status: 'Finished Airing',
  duration: '5 min per ep',
  aired: '2012',
  rating: 'G - All Ages',
  episodes: 6,
};
