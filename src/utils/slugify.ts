export function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/ +/g, '_')
    .replace(/_+/g, '-')
    .trim();                     
}