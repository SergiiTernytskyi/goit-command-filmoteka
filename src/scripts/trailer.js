const axios = require('axios').default;

export default async function findTrailer(movieId) {
  const config = {
    URL: 'https://api.themoviedb.org/3/movie/',
    key: '86c51b00b5bb8cfadb7d5efaffb91bf1',
  }
  try {
    const response = await axios.get(`${config.URL}${movieId}/videos?api_key=${config.key}&language=en-US`);
    const data = response.data.results;
    for (let i = 0; i < data.length; i += 1) {
      if (data[i].type === "Trailer") {
        if (data[i].name.indexOf('Trailer') > 0) {
          const trailerMarkup = `<div class="backdropTrailer">
              <iframe 
                class="trailerPlayer"
                src="https://www.youtube.com/embed/${data[i].key}" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; 
                autoplay; 
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture" 
                allowfullscreen>
              </iframe>
            </div>`
          return trailerMarkup
        }
      }
    }
  } catch (error) {
    console.log('error')
  }
}