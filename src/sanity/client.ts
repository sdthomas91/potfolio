// src/sanity/client.ts
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "7f1pxa8q",          // your project ID
  dataset: "production",          // your dataset name
  apiVersion: "2024-01-01",       // use current or fixed ISO date
  useCdn: false,                  // `false` = fresh data every time (can turn on later)
});
