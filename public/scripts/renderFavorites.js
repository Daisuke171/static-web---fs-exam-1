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
                  <svg viewBox="0 0 544.582 544.582"><path d="..." /></svg>
                  <svg viewBox="0 0 544.582 544.582"><path d="..." /></svg>
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
