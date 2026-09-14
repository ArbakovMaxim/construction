/**
 * Resolves a path from the JSON data files against the deployment base URL.
 *
 * The data files store paths relative to the site root ("/img/foo.png").
 * On GitHub Pages the app is served from a subdirectory, so those paths need
 * the "/construction" prefix; on Vercel it is served from the root and they
 * must stay untouched. CRA exposes the correct base as PUBLIC_URL, derived
 * from the "homepage" field at build time.
 */
export const asset = (path: string): string => {
  const base = process.env.PUBLIC_URL || "";
  if (!path.startsWith("/")) return path;
  return `${base}${path}`;
};
