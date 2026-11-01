import { buildCatalog } from "./content.js";

export const catalog = buildCatalog(import.meta.glob("/content/**/*.js", { eager: true, import: "default" }));
