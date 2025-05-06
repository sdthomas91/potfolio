// src/sanity/imageUrl.ts
import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);
