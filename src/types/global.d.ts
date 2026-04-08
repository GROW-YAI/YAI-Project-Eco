declare module "boafo-accessibility-widget" {
  export function initializeBoafoWidget(apiKey: string): void;
}

interface ImportMetaEnv {
  readonly VITE_BOAFO_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
