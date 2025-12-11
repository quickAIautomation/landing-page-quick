export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "Quick AI";

// Images
export const APP_LOGO = "/assets/images/logoQuickAI.png";

// Icons - Segmentos
export const ICON_MED = "/assets/icons/med.png";
export const ICON_BEAUTY = "/assets/icons/beauty.png";
export const ICON_AUTO = "/assets/icons/auto.png";

// Icons - Tecnologias
export const ICON_N8N = "/assets/icons/n8n.svg";
export const ICON_JAVASCRIPT = "/assets/icons/javascript.png";
export const ICON_PHP = "/assets/icons/php.png";
export const ICON_OPENAI = "/assets/icons/openai.svg";
export const ICON_POSTGRESQL = "/assets/icons/postgresql.png";
export const ICON_REDIS = "/assets/icons/redis.svg";
export const ICON_META = "/assets/icons/meta.svg";
export const ICON_CLOUDFLARE = "/assets/icons/cloudflare.svg";

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

