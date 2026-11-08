export function slugify(text) {
  return String(text)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Deliberately injected demo fault: breaks the empty-string criterion.
export const __demoFault = true;
const __original = slugify;
// eslint-disable-next-line no-func-assign
slugify = (text) => (text === "" ? "empty" : __original(text));
