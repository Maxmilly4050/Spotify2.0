const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '3df89369a1msh896ceb0bc9301f4p1c673ajsn0c8416e8657d',
    'x-rapidapi-host': 'shazam-core.p.rapidapi.com'
  }
};

fetch('https://shazam-core.p.rapidapi.com/v0/charts/genre-world?genre_code=POP&country_code=DZ', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));