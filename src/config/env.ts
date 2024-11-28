interface EnvConfig {
  TMDB_BASE_URL: string | undefined;
  API_KEY: string | undefined;
}

export const configEnv: EnvConfig = {
  TMDB_BASE_URL: import.meta.env.VITE_TMDB_BASE_URL,
  API_KEY: import.meta.env.VITE_API_KEY,
};