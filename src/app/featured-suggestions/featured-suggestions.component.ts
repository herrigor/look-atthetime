import { Component } from '@angular/core';

type Movie = {
  title: string;
  year: number;
  time: number;
  poster: string;
  synopsis: string;
}

@Component({
  selector: 'app-featured-suggestions',
  templateUrl: './featured-suggestions.component.html',
  styleUrls: ['./featured-suggestions.component.scss']
})
export class FeaturedSuggestionsComponent {
  movies: Movie[] = [
    {
      title: 'Fresh Prince of Bel-Air',
      year: 1990,
      time: 89,
      poster: 'https://source.unsplash.com/random/140x190/?movie',
      synopsis: 'This is the story all bout how my life got flipped, turned upside-down. And I\'d like to take a minute, just sit right there, I\'ll tell you how I became the prince of a town called Bel-Air',
    },
    {
      title: 'Gettin\' Jiggy Wit It',
      year: 2007,
      time: 101,
      poster: 'https://source.unsplash.com/random/140x190/?movie',
      synopsis: 'In the middle of the club with the rub-a-dub, uh. No love for the haters, the haters. Mad \'cause I got floor seats at the Lakers. See me on the fifty yard line with the Raiders.',
    },
    {
      title: 'Wild Wild West',
      year: 1999,
      time: 63,
      poster: 'https://source.unsplash.com/random/140x190/?movie',
      synopsis: 'Jim West, desperado. Rough rider, no you don\'t want nada. None of this, six-gunnin\' this, brother runnin\' this. Buffalo soldier, look, it\'s like I told ya.',
    },
    {
      title: 'Boom! Shake the Room',
      year: 1993,
      time: 126,
      poster: 'https://source.unsplash.com/random/140x190/?movie',
      synopsis: 'Yo back up now and give a brother room. The fuse is lit and I\'m about to go boom!. Mercy mercy, mercy me. My life is a cage but on stage I\'m free',
    }
  ];

}
