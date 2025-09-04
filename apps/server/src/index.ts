import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { getSystemPrompt } from "./utils/const";
import { streamText as streaming } from "hono/streaming";
import { streamText } from "ai";
import { google } from "@ai-sdk/google";
import { askAi } from "./config";

const app = new Hono();

app.use(logger());

app.use(
  "/*",
  cors({
    origin: process.env.CORS_ORIGIN || "",
    allowMethods: ["GET", "POST", "OPTIONS"],
  }),
);

app.get("/recommend", async (c) => {
  return streaming(c, async (stream) => {
    const query = c.req.query("query")
    if (!query || !query?.trim()) {
      return c.json({
        message: "Please Give Some Query for Recommendation",
        error: "Please Give Some Query for Recommendation",
      })
    }

    const { textStream } = askAi(query);

    let response: string = ""

    for await (const textPart of textStream) {
      console.log(textPart)
      response += textPart
      await stream.writeln(textPart)
    }

    console.log(response)

    stream.abort()
  })
});

export default app;
