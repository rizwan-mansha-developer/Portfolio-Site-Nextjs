import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "20917agv",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

const builder = ImageUrlBuilder(client);

export const UrlForImage = (source: any) => {
  return builder.image(source);
};
