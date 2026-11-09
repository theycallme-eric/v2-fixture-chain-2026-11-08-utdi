export function titleCase(text) {
  return String(text)
    .toLowerCase()
    .replace(/(^|[\s-])([^\s-])/g, (_, sep, ch) => sep + ch.toUpperCase());
}
