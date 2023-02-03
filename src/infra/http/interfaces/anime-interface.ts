export interface IResponseAnime {
  mal_id: number;
  url: string;
  title: string;
  title_english: string;
  title_japanese: string;
  background: null;
  season: null;
  airing: boolean;
  year: number | null;
  score: number | null;
  type: string;
  source: string;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  synopsis: string;
  status: string;
  duration: string;
  aired: {
    from: string;
    to?: string | null;
    prop: {
      from: {
        day: number | null;
        month: number | null;
        year: number | null;
      };
      to?: {
        day: number | null | null;
        month: number | null;
        year: number | null;
      };
    };
    string?: string;
  };
  rating?: string | null;
  episodes: number | null;
}
