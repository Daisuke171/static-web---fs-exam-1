const API_KEY = "26556575658af780cf7d1cdfa28bc314";
const container = document.getElementById("favorites-container");


async function fetchFavoriteMovies(ids) {
  const moviePromises = ids.map(id =>
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-ES`)
      .then(res => res.json())
  );
  return Promise.all(moviePromises);
}

function createMovieCard({ poster_path, title, vote_average, id }) {
  const slug = `${title.toLowerCase().replace(/\s+/g, "-")}-${id}`;
  const card = document.createElement("div");
  card.innerHTML = `
    <article class="movie-card">
      <div class="movie-card__image-container">
        <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" class="movie-card__image"/>
        <div class="movie-card__image-container__favBtn">
          <div class="container">
            <label for="checkbox-${id}">
              <div class="label">
                <input type="checkbox" id="checkbox-${id}" data-id="${id}" checked />
                <div class="heart">
                  <svg viewBox="0 0 544.582 544.582">
                    <path d="M448.069,57.839c-72.675-23.562-150.781,15.759-175.721,87.898C247.41,73.522,169.303,34.277,96.628,57.839
                    C23.111,81.784-16.975,160.885,6.894,234.708c22.95,70.38,235.773,258.876,263.006,258.876
                    c27.234,0,244.801-188.267,267.751-258.876C561.595,160.732,521.509,81.631,448.069,57.839z">
                </svg>
                <svg viewBox="0 0 544.582 544.582">
                    <path d="M448.069,57.839c-72.675-23.562-150.781,15.759-175.721,87.898C247.41,73.522,169.303,34.277,96.628,57.839
                    C23.111,81.784-16.975,160.885,6.894,234.708c22.95,70.38,235.773,258.876,263.006,258.876
                    c27.234,0,244.801-188.267,267.751-258.876C561.595,160.732,521.509,81.631,448.069,57.839z">
                </svg>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div class="movie-card__overlay">
          <span class="movie-card__rating">⭐ ${vote_average.toFixed(1)}</span>
          <a href="/movies/${slug}" class="movie-card__link">Ver detalles</a>
        </div>
      </div>
      <h3 class="movie-card__title"><a href="/movies/${slug}">${title}</a></h3>
    </article>
  
    
  `;
  return card.firstElementChild;
}

(async function renderFavorites() {
  const container = document.getElementById("favorites-container");
  if (!container) return;

  container.innerHTML = "";

  const favIds = JSON.parse(localStorage.getItem("favorites")) || [];
  

  if (favIds.length === 0) {
    container.innerHTML = "<p style='color: white;'>No hay películas favoritas.</p>";
    return;
  }

  const movies = await fetchFavoriteMovies(favIds);
  movies.forEach(movie => {
    const card = createMovieCard(movie);
    container.appendChild(card);
  });
})();

