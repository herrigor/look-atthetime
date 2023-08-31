import { Injectable } from '@angular/core';
import { API_KEY, API_URL, TMDBFullMovie, TMDBMovie, TMDBSearch } from './api.models';
import { Observable, Subject, forkJoin, map, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  searchResult$ = new Observable<TMDBFullMovie[]>()
  search$ = new Subject<string>();
  movieDiscoveryURL = `${API_URL}/discover/movie?api_key={api_key}`
  movieDetailsURL = `${API_URL}/movie/{id}?api_key={api_key}`

  constructor(private http: HttpClient) {
    this.movieDiscoveryURL = this.movieDiscoveryURL.replace('{api_key}', `${API_KEY}`)
    this.movieDetailsURL = this.movieDetailsURL.replace('{api_key}', `${API_KEY}`)

    this.searchResult$ = this.search$.pipe(
      map(genres => `${this.movieDiscoveryURL}&with_genres=${genres}`),
      switchMap((url: string) => this.fetchGenre(url)),
      switchMap(ids => this.fetchDetails(ids)),
    )
  }

  getMovies() {
    return this.searchResult$
  }

  setGenre(genres: string) {
    this.search$.next(genres)
  }

  fetchGenre(url: string) {
    return this.http.get<TMDBSearch>(url).pipe(
      map(response => response.results),
      map((result: TMDBMovie[]) => result.filter((movie, i) => i < 7).map(movie =>  movie.id)),
    )
  }

  fetchDetails(ids: number[]): Observable<TMDBFullMovie[]> {
    const urls = ids.map(id => this.fetch(id))
    return forkJoin([...urls]).pipe(
      tap(movie => console.log('fetchDetails movie:', movie)),
      )
    }

    fetch(id: number) {
      return this.http.get<TMDBFullMovie>(this.movieDetailsURL.replace('{id}', `${id}`)).pipe(
        tap(movie => movie.poster_path = `https://image.tmdb.org/t/p/w200${movie.poster_path}`)
      )
  }
}
