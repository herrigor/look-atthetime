import { environment } from "src/environments/environment.prod";

export enum MovieGenres {
  Action = 28,
  Adventure = 12,
  Animation = 16,
  Comedy = 35,
  Crime = 80,
  Documentary = 99,
  Drama = 18,
  Family = 10751,
  Fantasy = 14,
  History = 36,
  Horror = 27,
  Music = 10402,
  Mystery = 9648,
  Romance = 10749,
  'Science Fiction' = 878,
  'TV Movie' = 10770,
  Thriller = 53,
  War = 10752,
  Western = 37,
}

export type Movie = {
  title: string;
  year: number;
  time: number;
  poster: string;
  synopsis: string;
}

export interface TMDBSearch {
  page:          number;
  results:       TMDBMovie[] | TMDBDiscoveryMovie[];
  total_pages:   number;
  total_results: number;
}

export interface TMDBMovie {
  adult:             boolean;
  backdrop_path:     string;
  id:                number;
  original_language: OriginalLanguage;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date:      string;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}
export interface TMDBMovieDetails {
  belongs_to_collection: null;
  budget:                number;
  genres:                Genre[];
  homepage:              string;
  imdb_id:               string;
  production_companies:  ProductionCompany[];
  production_countries:  ProductionCountry[];
  revenue:               number;
  runtime:               number;
  spoken_languages:      SpokenLanguage[];
  status:                string;
  tagline:               string;
  vote_average:          number;
  vote_count:            number;
}

export type TMDBDiscoveryMovie = TMDBMovie & { genre_ids: number[] };
export type TMDBFullMovie = TMDBMovie & TMDBMovieDetails;

export interface Genre {
  id:   number;
  name: string;
}

export interface ProductionCompany {
  id:             number;
  logo_path:      null | string;
  name:           string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name:       string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1:    string;
  name:         string;
}

export enum OriginalLanguage {
  En = "en",
  Es = "es",
}

export const API_URL = 'https://api.themoviedb.org/3'
export const API_KEY = environment.TMDB_API_KEY
