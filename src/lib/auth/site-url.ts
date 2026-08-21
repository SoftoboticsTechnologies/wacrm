// Client-side counterpart to the base-URL resolution in
// /api/account/invitations: `NEXT_PUBLIC_SITE_URL` (inlined at Docker
// build time) wins when set, so auth emails point at the configured
// public domain instead of whatever host the browser happened to load
// from (e.g. localhost during a reverse-proxied deploy).
export function getClientSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) return configured.replace(/\/+$/, "");
  return window.location.origin;
}
