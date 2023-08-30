import { Injectable } from '@angular/core';
const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=###&with_genres=28'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
}
