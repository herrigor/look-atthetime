import { Injectable } from '@angular/core';
import { API_URL, MovieGenres } from './api.models';

const MovieDiscover = new URL('/discover/movie', API_URL)
MovieDiscover.searchParams.set('api_key', '########')
MovieDiscover.searchParams.set('with_genres', MovieGenres.Comedy.toString())

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() { }
}
