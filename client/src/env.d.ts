/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GQL_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
