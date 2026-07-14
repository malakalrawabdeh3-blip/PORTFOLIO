import app from "./app";
import { logger } from "./lib/logger";

const DEFAULT_PORT = 3000;
const rawPort = process.env["PORT"];

const port = rawPort ? Number(rawPort) : DEFAULT_PORT;

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

if (!rawPort) {
  logger.warn(
    { port },
    `PORT environment variable was not provided; falling back to default port ${DEFAULT_PORT}`,
  );
}

app.listen(port, (err) => {
  if (err) {
    logger.error({ err }, "Error listening on port");
    process.exit(1);
  }

  logger.info({ port }, "Server listening");
});
