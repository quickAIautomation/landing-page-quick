import {
  ICON_N8N,
  ICON_JAVASCRIPT,
  ICON_PHP,
  ICON_OPENAI,
  ICON_POSTGRESQL,
  ICON_REDIS,
  ICON_META,
  ICON_CLOUDFLARE,
} from "@/config/constants";

export const TechnologyIcons = {
  n8n: () => (
    <img 
      src={ICON_N8N} 
      alt="n8n" 
      className="w-12 h-12 object-contain"
      style={{ display: 'block' }}
    />
  ),
  javascript: () => (
    <img 
      src={ICON_JAVASCRIPT} 
      alt="JavaScript" 
      className="w-12 h-12 object-contain"
      style={{ display: 'block' }}
    />
  ),
  php: () => (
    <img 
      src={ICON_PHP} 
      alt="PHP" 
      className="w-12 h-12 object-contain"
      style={{ display: 'block' }}
    />
  ),
  openai: () => (
    <svg 
      className="w-12 h-12" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      fillRule="evenodd" 
      xmlns="http://www.w3.org/2000/svg" 
      style={{ display: 'block', color: '#fff' }}
    >
      <title>OpenAI</title>
      <path d="M21.55 10.004a5.416 5.416 0 00-.478-4.501c-1.217-2.09-3.662-3.166-6.05-2.66A5.59 5.59 0 0010.831 1C8.39.995 6.224 2.546 5.473 4.838A5.553 5.553 0 001.76 7.496a5.487 5.487 0 00.691 6.5 5.416 5.416 0 00.477 4.502c1.217 2.09 3.662 3.165 6.05 2.66A5.586 5.586 0 0013.168 23c2.443.006 4.61-1.546 5.361-3.84a5.553 5.553 0 003.715-2.66 5.488 5.488 0 00-.693-6.497v.001zm-8.381 11.558a4.199 4.199 0 01-2.675-.954c.034-.018.093-.05.132-.074l4.44-2.53a.71.71 0 00.364-.623v-6.176l1.877 1.069c.02.01.033.029.036.05v5.115c-.003 2.274-1.87 4.118-4.174 4.123zM4.192 17.78a4.059 4.059 0 01-.498-2.763c.032.02.09.055.131.078l4.44 2.53c.225.13.504.13.73 0l5.42-3.088v2.138a.068.068 0 01-.027.057L9.9 19.288c-1.999 1.136-4.552.46-5.707-1.51h-.001zM3.023 8.216A4.15 4.15 0 015.198 6.41l-.002.151v5.06a.711.711 0 00.364.624l5.42 3.087-1.876 1.07a.067.067 0 01-.063.005l-4.489-2.559c-1.995-1.14-2.679-3.658-1.53-5.63h.001zm15.417 3.54l-5.42-3.088L14.896 7.6a.067.067 0 01.063-.006l4.489 2.557c1.998 1.14 2.683 3.662 1.529 5.633a4.163 4.163 0 01-2.174 1.807V12.38a.71.71 0 00-.363-.623zm1.867-2.773a6.04 6.04 0 00-.132-.078l-4.44-2.53a.731.731 0 00-.729 0l-5.42 3.088V7.325a.068.068 0 01.027-.057L14.1 4.713c2-1.137 4.555-.46 5.707 1.513.487.833.664 1.809.499 2.757h.001zm-11.741 3.81l-1.877-1.068a.065.065 0 01-.036-.051V6.559c.001-2.277 1.873-4.122 4.181-4.12.976 0 1.92.338 2.671.954-.034.018-.092.05-.131.073l-4.44 2.53a.71.71 0 00-.365.623l-.003 6.173v.002zm1.02-2.168L12 9.25l2.414 1.375v2.75L12 14.75l-2.415-1.375v-2.75z"></path>
    </svg>
  ),
  postgresql: () => (
    <img 
      src={ICON_POSTGRESQL} 
      alt="PostgreSQL" 
      className="w-12 h-12 object-contain"
      style={{ display: 'block' }}
    />
  ),
  supabase: () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
      <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z" fill="#3ECF8E"/>
    </svg>
  ),
  redis: () => (
    <img 
      src={ICON_REDIS} 
      alt="Redis" 
      className="w-12 h-12 object-contain"
      style={{ display: 'block' }}
    />
  ),
  meta: () => (
    <img 
      src={ICON_META} 
      alt="META API" 
      className="w-12 h-12 object-contain"
      style={{ display: 'block' }}
    />
  ),
  cloudflare: () => (
    <img 
      src={ICON_CLOUDFLARE} 
      alt="Cloudflare" 
      className="w-12 h-12 object-contain"
      style={{ display: 'block' }}
    />
  ),
};

