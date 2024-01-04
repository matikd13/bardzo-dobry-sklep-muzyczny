/* eslint-disable @typescript-eslint/consistent-type-definitions */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GQL_URI: string;
  readonly VITE_AUTH0_ID: string;
  readonly VITE_AUTH0_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
