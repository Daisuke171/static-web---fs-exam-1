import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BY_Sx6yE.mjs';
import { manifest } from './manifest_CZrro9N7.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/actors/_page_.astro.mjs');
const _page2 = () => import('./pages/actors/_slug_.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/main/homepage.astro.mjs');
const _page5 = () => import('./pages/movies/_page_.astro.mjs');
const _page6 = () => import('./pages/movies/_slug_.astro.mjs');
const _page7 = () => import('./pages/user.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.7.13_@types+node@22.15.18_rollup@4.40.2_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/actors/[page].astro", _page1],
    ["src/pages/actors/[slug].astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/main/Homepage.astro", _page4],
    ["src/pages/movies/[page].astro", _page5],
    ["src/pages/movies/[slug].astro", _page6],
    ["src/pages/user.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "14c13c78-f30b-440c-b51f-cac2d0757565",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
