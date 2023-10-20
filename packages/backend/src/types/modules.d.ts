declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI: string;
      JWT_SECRET: string;
      JWT_EXPIRATION: string;
      POSTGRES_HOST: string;
      POSTGRES_PORT_DB: number;
      POSTGRES_USER: string;
      POSTGRES_PASSWORD: string;
      POSTGRES_DB: string;
      SMTP_HOST: string;
      SMTP_PORT: number;
      SMTP_USER: string;
      SMTP_PASSWORD: string;
      SERVER_URL: string;
      CLIENT_URL: string;
      CHANGE_ROUTE: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
