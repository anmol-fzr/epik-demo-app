import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { getSystemPrompt } from "./utils/const";
import { streamText as streaming } from "hono/streaming";
import { streamText } from "ai";
import { google } from "@ai-sdk/google";
import { askAi } from "./config";
import { products } from "./db";

const app = new Hono();

app.use(logger());

app.use(
  "*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "OPTIONS"],
  }),
);


app.get("/products", async (c) => {
  return c.json(products.getAllProducts())
})

app.get("/recommend", async (c) => {
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
    response += textPart
  }
  // This is Still Blocking

  var lines = response.split('\n');
  lines.splice(0, 1);
  lines.splice(lines.length - 1, 1);
  const newText = lines.join('\n');

  const obj = JSON.parse(newText)
  const prods = products.getProductsByName(obj.product_names)

  return c.json({
    reason: obj.reason,
    products: prods,
  })
});

export default app;
