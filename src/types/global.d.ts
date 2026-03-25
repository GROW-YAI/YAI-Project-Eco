declare module "boafo-accessibility-widget" {
  export function initializeBoafoWidget(apiKey: string): void;
}

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_BOAFO_API_KEY: string;
    VITE_BOAFO_API_KEY: string;
  }
}
