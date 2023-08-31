import { Component, ElementRef } from '@angular/core';
import { MovieGenres } from '../shared/services/api/api.models';
import { ApiService } from '../shared/services/api/api.service';

@Component({
  selector: 'app-genre-selector',
  templateUrl: './genre-selector.component.html',
  styleUrls: ['./genre-selector.component.scss']
})
export class GenreSelectorComponent {
  genres = [
    { label: 'funny', value: [MovieGenres.Comedy] },
    { label: 'scary', value: [MovieGenres.Horror, MovieGenres.Thriller] },
    { label: 'moving', value: [MovieGenres.Drama, MovieGenres.Romance] },
    { label: 'thrilling', value: [MovieGenres.Adventure, MovieGenres.Fantasy, MovieGenres.Action] },
    { label: 'animated', value: [MovieGenres.Animation] },
    { label: 'symphonic', value: [MovieGenres.Music] },
    { label: 'wondrous', value: [MovieGenres.Mystery, MovieGenres['Science Fiction']] },
    { label: 'cowboy', value: [MovieGenres.Western] },
    { label: 'wholesome', value: [MovieGenres.Family] },
    { label: 'serious', value: [MovieGenres.Documentary, MovieGenres.History, MovieGenres.War]}
  ]

  constructor(private apiService: ApiService) {

  }

  onChange(event: Event) {
    const searchGenre = (event.target as HTMLSelectElement).value
    this.apiService.setGenre(searchGenre)
  }
}
