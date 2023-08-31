import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../services/api/api.models';

@Pipe({
  name: 'watch'
})
export class WatchPipe implements PipeTransform {

  transform(movie: Movie): URL {
    const url = new URL('https://www.google.com/search')
    url.searchParams.set('q', `${movie.title.toLowerCase()} ${movie.year || ''}`)
    return url;
  }

}
