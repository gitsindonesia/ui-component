interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_API_BASE_URL: string;
  // readonly VITE_IMAGE_BASE_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
