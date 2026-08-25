import { app } from "./app.js";
import { env } from "./config/env.js";

app.listen(env.PORT, (error) => {
  if (error) {
    console.error("Failed to start HTTP server: ", error);
    process.exit(1);
  }

  console.log(`HTTP server running on http://localhost:${env.PORT} in ${env.NODE_ENV} mode.`);
});
