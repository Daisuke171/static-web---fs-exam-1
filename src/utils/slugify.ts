export function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')     // Elimina caracteres especiales
    .replace(/\s+/g, '-')         // Sustituye espacios por guiones
    .replace(/--+/g, '-')         // Elimina guiones duplicados
    .trim();                      // Quita espacios al principio/final
}