import { validateContent } from "./content";
import { createLogger } from "./logger";

const logger = createLogger();
try {
    await validateContent();
} catch (error) {
    logger("error", error instanceof Error ? error.message : "Content validation failed");
    process.exitCode = 1;
}
