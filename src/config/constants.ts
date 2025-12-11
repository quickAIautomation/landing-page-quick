export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "Quick AI";

// Helper to get base path for assets
const getBasePath = () => {
  // In production with base path, use it. Otherwise use root.
  return import.meta.env.BASE_URL || '/';
};

// Images
export const APP_LOGO = `${getBasePath()}assets/images/logoQuickAI.png`;

// Icons - Segmentos
export const ICON_MED = `${getBasePath()}assets/icons/med.png`;
export const ICON_BEAUTY = `${getBasePath()}assets/icons/beauty.png`;
export const ICON_AUTO = `${getBasePath()}assets/icons/auto.png`;

// Icons - Tecnologias
export const ICON_N8N = `${getBasePath()}assets/icons/n8n.svg`;
export const ICON_JAVASCRIPT = `${getBasePath()}assets/icons/javascript.png`;
export const ICON_PHP = `${getBasePath()}assets/icons/php.png`;
export const ICON_OPENAI = `${getBasePath()}assets/icons/openai.svg`;
export const ICON_POSTGRESQL = `${getBasePath()}assets/icons/postgresql.png`;
export const ICON_REDIS = `${getBasePath()}assets/icons/redis.svg`;
export const ICON_META = `${getBasePath()}assets/icons/meta.svg`;
export const ICON_CLOUDFLARE = `${getBasePath()}assets/icons/cloudflare.svg`;

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL || '';
  const appId = import.meta.env.VITE_APP_ID || '';
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};

