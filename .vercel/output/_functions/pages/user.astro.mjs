import { c as createComponent, f as renderHead, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_D2uXXV46.mjs';
import { $ as $$MainLayout, a as $$ClientRouter } from '../chunks/MainLayout_F3IuKN8Z.mjs';
import { $ as $$NavBar } from '../chunks/navBar_XeHe7adw.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$User = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<head><link rel="stylesheet" href="/styles/movie-card.css">${renderHead()}</head> ${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "User Profile", "data-astro-cid-rkrdl5k3": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", ' <header class="userProfile__header" data-astro-cid-rkrdl5k3> ', ' <div class="userDetail" data-astro-cid-rkrdl5k3> <figure class="userAvatar" data-astro-cid-rkrdl5k3> <img src="/images/placegolderAvatar.png" alt="" data-astro-cid-rkrdl5k3> </figure> <h1 class="userProfile__title" data-astro-cid-rkrdl5k3>User</h1> </div> </header> <main data-astro-cid-rkrdl5k3> <h1 class="userProfile__favoritesTitle" data-astro-cid-rkrdl5k3>Tus Peliculas Favoritas</h1> <div id="favorites-container" class="movies-container" data-astro-cid-rkrdl5k3></div> <h1 class="userProfile__favoritesTitle" data-astro-cid-rkrdl5k3>Tus Actores Favoritos</h1> <div id="favorites-container-actors" class="movies-container" data-astro-cid-rkrdl5k3></div> </main> <script type="module" src="/scripts/renderFavorites.js"><\/script> '])), renderComponent($$result2, "ClientRouter", $$ClientRouter, { "data-astro-cid-rkrdl5k3": true }), renderComponent($$result2, "NavBar", $$NavBar, { "data-astro-cid-rkrdl5k3": true })) })} `;
}, "/home/lain/projects/Static-Web---FS-EXAM-1/src/pages/user.astro", void 0);

const $$file = "/home/lain/projects/Static-Web---FS-EXAM-1/src/pages/user.astro";
const $$url = "/user";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$User,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
