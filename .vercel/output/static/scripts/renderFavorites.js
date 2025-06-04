const API_KEY1 = "26556575658af780cf7d1cdfa28bc314";
const API_KEY2 = "1e7a7835f074482139d752775addeb5e";

async function fetchFavoriteMovies(ids) {
  const moviePromises = ids.map(id =>
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY1}&language=es-ES`)
      .then(res1 => res1.json())
  );
  return Promise.all(moviePromises);
}
async function fetchFavoriteActors(ids) {
  const actorPromises = ids.map(id =>
    fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY2}`)
      .then(res2 => res2.json())
  );
  return Promise.all(actorPromises);
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
function createActorCard({ profile_path, name, popularity, id }) {
  const slug = `${name.toLowerCase().replace(/ +/g, '_').replace(/_+/g, '-').trim()  }-${id}`;
  const card = document.createElement("div");
  card.innerHTML = `
        <article class="movie-card">
      <div class="movie-card__image-container">
        <img src="https://image.tmdb.org/t/p/w500${profile_path}" alt="${name}" class="movie-card__image"/>
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
          <span class="movie-card__rating">❤️ ${popularity.toFixed(1)}</span>
          <a href="/actors/${slug}" class="movie-card__link">Ver detalles</a>
        </div>
      </div>
      <h3 class="movie-card__title"><a href="/movies/${slug}">${name}</a></h3>
    </article>
  
    
  `;
  return card.firstElementChild;
}

(async function renderFavoritesMovies() {
  const containerMovies = document.getElementById("favorites-container");
  const containerActors = document.getElementById("favorites-container-actors");

  containerMovies.innerHTML = "";

  const favIdsMovies = JSON.parse(localStorage.getItem("favorites")) || [];
  
  if (favIdsMovies.length === 0) {
    containerMovies.innerHTML = "<p style='color: white;'>No hay películas favoritas.</p>";
  }

  const movies = await fetchFavoriteMovies(favIdsMovies);
  movies.forEach(movie => {
    const card = createMovieCard(movie);
    containerMovies.appendChild(card);
  });

  containerActors.innerHTML = "";

  const favIDsActors = JSON.parse(localStorage.getItem("favoritesActors")) || [];
  if (favIDsActors.length === 0) {
    containerActors.innerHTML = "<p style='color: white;'>No hay actores favoritos.</p>";
    return;
  }

  const actors = await fetchFavoriteActors(favIDsActors);
  actors.forEach(actor => {
    const card = createActorCard(actor);
    containerActors.appendChild(card);
  });
})();

