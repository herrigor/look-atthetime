import { Pipe, PipeTransform } from '@angular/core';
import { TMDBFullMovie } from '../services/api/api.models';
import { DateTime } from 'luxon';

@Pipe({
  name: 'watch'
})
export class WatchPipe implements PipeTransform {

  transform(movie: TMDBFullMovie): URL {
    const url = new URL('https://www.google.com/search')
    const year = DateTime.fromFormat(movie.release_date, 'yyyy-MM-dd').toFormat('yyyy')
    url.searchParams.set('q', `${movie.original_title.toLowerCase()} ${ year || ''}`)
    return url;
  }

}
