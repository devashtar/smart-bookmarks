/**
 * Helps to escape symbols to avoid crashing of app.
 */
export const escapeRegExp = (string: string) => string.replace(/\\/g, '\\\\');
