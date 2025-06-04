import { c as createComponent, e as renderScript, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bg_fNKsD.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_DYFgb4z7.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/home/lain/projects/Static-Web---FS-EXAM-1/src/pages/contact.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Movie Zone", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="contect-form" data-astro-cid-uw5kdbxl> <form class="contect-form__contact" id="contact-form" action="" data-astro-cid-uw5kdbxl> <h2 class="contect-form__title" data-astro-cid-uw5kdbxl>Registro</h2> <label class="contect-form__name" for="nombre" data-astro-cid-uw5kdbxl>Nombre</label> <input class="contect-form__name-in" type="text" id="name" name="name" data-astro-cid-uw5kdbxl> <label for="apellido" class="contect-form__name" data-astro-cid-uw5kdbxl>Apellido</label> <input class="contect-form__name-in" type="text" id="apellido" name="last-name" data-astro-cid-uw5kdbxl> <label for="email" class="contect-form__name" data-astro-cid-uw5kdbxl>Email</label> <input class="contect-form__name-in" type="email" id="email" name="email" data-astro-cid-uw5kdbxl> <label for="numero" class="contect-form__name" data-astro-cid-uw5kdbxl>Numero de telefono</label> <input class="contect-form__name-in" type="number" id="numero" name="number" data-astro-cid-uw5kdbxl> <button class="contect-form__button" type="submit" id="" name="boton" data-astro-cid-uw5kdbxl>Enviar</button> </form> </section> <footer class="footer" data-astro-cid-uw5kdbxl> <nav class="footer-nav" data-astro-cid-uw5kdbxl> <a href="main/Homepage" class="footer-nav__link" data-astro-cid-uw5kdbxl> Volver a pagina principal </a> </nav> </footer> ` })} `;
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
