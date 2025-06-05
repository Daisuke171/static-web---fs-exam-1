import { c as createComponent, r as renderComponent, m as maybeRenderHead, b as renderTemplate } from '../chunks/astro/server_D2uXXV46.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_F3IuKN8Z.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Movie Zone", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([' <script type="module" src="/js/form-handler.js"><\/script> ']))) })} ${maybeRenderHead()}<section class="contect-form" data-astro-cid-uw5kdbxl> <form class="contect-form__contact" id="contact-form" action="" data-astro-cid-uw5kdbxl> <h2 class="contect-form__title" data-astro-cid-uw5kdbxl>Registro</h2> <label class="contect-form__name" for="nombre" data-astro-cid-uw5kdbxl>Nombre</label> <input class="contect-form__name-in" type="text" id="name" name="name" data-astro-cid-uw5kdbxl> <label for="apellido" class="contect-form__name" data-astro-cid-uw5kdbxl>Apellido</label> <input class="contect-form__name-in" type="text" id="apellido" name="last-name" data-astro-cid-uw5kdbxl> <label for="email" class="contect-form__name" data-astro-cid-uw5kdbxl>Email</label> <input class="contect-form__name-in" type="email" id="email" name="email" data-astro-cid-uw5kdbxl> <label for="numero" class="contect-form__name" data-astro-cid-uw5kdbxl>Numero de telefono</label> <input class="contect-form__name-in" type="number" id="numero" name="number" data-astro-cid-uw5kdbxl> <label for="subject " class="contect-form__name" data-astro-cid-uw5kdbxl>Asunto</label> <input class="contect-form__name-in" type="text" id="subject" name="subject" data-astro-cid-uw5kdbxl> <button class="contect-form__button" type="submit" id="" name="boton" data-astro-cid-uw5kdbxl>Enviar</button> <p id="error-msg" class="contect-form__p" data-astro-cid-uw5kdbxl>Por favor, completá todos los campos.</p> </form> </section> <footer class="footer" data-astro-cid-uw5kdbxl> <nav class="footer-nav" data-astro-cid-uw5kdbxl> <a href="main/Homepage" class="footer-nav__link" data-astro-cid-uw5kdbxl> Volver a pagina principal </a> </nav> </footer> `;
}, "/home/lain/projects/Static-Web---FS-EXAM-1/src/pages/contact.astro", void 0);

const $$file = "/home/lain/projects/Static-Web---FS-EXAM-1/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
