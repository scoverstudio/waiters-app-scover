export const API_URL =
  process.env.NODE_ENV === "production"
    ? "/api"
    : "[http://localhost:3131/tables](http://localhost:3131/tables)";
