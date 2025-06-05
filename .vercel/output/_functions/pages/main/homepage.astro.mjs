import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_D2uXXV46.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_F3IuKN8Z.mjs';
import { $ as $$NavBar } from '../../chunks/navBar_XeHe7adw.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Homepage = createComponent(async ($$result, $$props, $$slots) => {
  const API_KEY = "26556575658af780cf7d1cdfa28bc314";
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`);
  const data = await response.json();
  const movies = data.results.slice(0, 5);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Movie Zone", "data-astro-cid-ipooic7p": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="header-catalog" data-astro-cid-ipooic7p> ${renderComponent($$result2, "NavBar", $$NavBar, { "data-astro-cid-ipooic7p": true })} <h1 class="header-catalog__title" data-astro-cid-ipooic7p>Bienvenido a Movie Zone</h1> <p class="header-catalog__description" data-astro-cid-ipooic7p>Explora las películas más populares del momento</p> </header> <main class="main-content" data-astro-cid-ipooic7p> <section class="hero-section" data-astro-cid-ipooic7p> ${movies.map((movie) => renderTemplate`<article class="hero-card" data-astro-cid-ipooic7p> <img${addAttribute(`https://image.tmdb.org/t/p/w500${movie.poster_path}`, "src")}${addAttribute(movie.title, "alt")} class="hero-card__img" data-astro-cid-ipooic7p> <div class="hero-card__content" data-astro-cid-ipooic7p> <h2 class="hero-card__title" data-astro-cid-ipooic7p>${movie.title}</h2> <p class="hero-card__overview" data-astro-cid-ipooic7p>${movie.overview}</p> <p class="hero-card__rating" data-astro-cid-ipooic7p>⭐ ${movie.vote_average}</p> </div> </article>`)} </section> </main> <footer class="footer" data-astro-cid-ipooic7p> <nav class="footer-nav" data-astro-cid-ipooic7p> <a href="/movies/1" class="footer-nav__link" data-astro-cid-ipooic7p>Ver catálogo completo</a> <a href="../contact" class="footer-nav__contac" data-astro-cid-ipooic7p>Contáctanos</a> </nav> </footer> ` })} `;
}, "/home/lain/projects/Static-Web---FS-EXAM-1/src/pages/main/Homepage.astro", void 0);

const $$file = "/home/lain/projects/Static-Web---FS-EXAM-1/src/pages/main/Homepage.astro";
const $$url = "/main/Homepage";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Homepage,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
