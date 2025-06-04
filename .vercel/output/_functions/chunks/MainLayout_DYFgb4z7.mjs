import { c as createComponent, a as createAstro, d as addAttribute, e as renderScript, r as renderTemplate, b as renderComponent, f as renderHead, g as renderSlot } from './astro/server_Bg_fNKsD.mjs';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/lain/projects/Static-Web---FS-EXAM-1/node_modules/.pnpm/astro@5.7.13_@types+node@22.15.18_rollup@4.40.2_typescript@5.8.3/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/lain/projects/Static-Web---FS-EXAM-1/node_modules/.pnpm/astro@5.7.13_@types+node@22.15.18_rollup@4.40.2_typescript@5.8.3/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><link rel="icon" type="image/svg+xml" href="./public/favicon.svg"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/lain/projects/Static-Web---FS-EXAM-1/src/layout/MainLayout.astro", void 0);

export { $$MainLayout as $, $$ClientRouter as a };
