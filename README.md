# Oh my! Look at the time
Watching a comedy or a adventure flick before bed just to have that feelgood sensation then a good night's sleep is comforting (or, maybe an horror idk you do you),  but we don't want to ruin it all for our future selves.

You probably have been caught in this time-old conundrum. You need to wake up early but the streaming service is already on and one more movie to watch couldn't hurt, could it?
Ok, it may not be a time-old problem, but it is quite offputing to know you just may wake up with the wrong foot the next day.

**_Oh my! Look at the time_** will help you choose a movie knowing exactly at what time it'll end!

This is a very simple app, choose the category of movie you want to watch, read the sinopsys and pick one.

Good watch and good sleep :)


## Setting up

This project was generated with Angular 16.1.3 and you will need to have [Node.js](https://nodejs.org/) installed on your machine.

After being done installing Node, run `npm i` in the terminal.

Then you'll need an Api Key from **_The Movie Database_**. Register in the website and request a key at [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api), fill in some info and confirm. With the key ready create a `.env` file at the root of the project, grab your key and paste it in:
```bash
TMDB_API_KEY=abunchofcharactersgoeshere
```

Lastly, run `ng serve` for a dev server and navigate to `http://localhost:4200/`.

&nbsp;
&nbsp;

&nbsp;
&nbsp;
___
### Afterword
As the scope right now is just to have some fun with this dilemma of modern days, there isn't a proper way to watch a chosen movie. So the next best thing was creating a link on each featured suggestion to go to Google, as it lists which streaming services offer them.

As-is the app can only find the same movies in order for each category. It seems to prioritize retrieving newer releases and some other parameters, regardless of ratings or other information.
