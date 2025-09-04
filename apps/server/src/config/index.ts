import { products } from '@/db';
import { systemPrompt } from '@/utils/const';
import { google } from '@ai-sdk/google';
import { streamText, tool } from 'ai';
import { z } from 'zod';

// const productSchema = z.object({
//   brand: z.string().describe("The Brand / Company of the Product"),
//   product_name: z.string().describe("The Name of the Product Unique across all Products"),
//   price: z.number().int().describe("The Price of the Product in unknown Currency, assume Rupees for now"),
//   category: z.string().describe("The category to which the Product Belongs"),
//   description: z.string().describe("Description of the Product")
// })
// const productsSchema = z.array(productSchema)

export function askAi(prompt: string) {
  return streamText({
    model: google('gemini-2.5-flash-lite'),
    prompt: systemPrompt(prompt),
    // tools: {
    //   getAllProducts: tool({
    //     description: "Get all the available Products",
    //     inputSchema: z.object({}),
    //     //outputSchema: productsSchema,
    //     execute: () => {
    //       console.log("Getting All Products ...")
    //       return products
    //     }
    //   }),
    // }
  });
}
