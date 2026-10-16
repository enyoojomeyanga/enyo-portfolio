// Set SITE_URL in .env.local and your hosting environment for your real domain.
const configuredUrl = process.env.SITE_URL?.trim() || "https://enyo-portfolio.vercel.app";
const parsed = new URL(configuredUrl);
if (!['http:', 'https:'].includes(parsed.protocol) || parsed.username || parsed.password || parsed.pathname !== '/' || parsed.search || parsed.hash) {
  throw new Error('SITE_URL must be an HTTP(S) origin, such as https://example.com');
}
export const SITE_URL = parsed.origin;
