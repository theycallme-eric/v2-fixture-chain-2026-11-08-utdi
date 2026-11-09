import { slugify } from "./slugify.mjs";
import { titleCase } from "./title-case.mjs";

export function headingAnchor(text) {
  return { title: titleCase(text), anchor: "#" + slugify(text) };
}
