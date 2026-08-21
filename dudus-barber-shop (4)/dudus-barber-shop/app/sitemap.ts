import type { MetadataRoute } from "next";

// TODO: alterar para o domínio real assim que o site for publicado
const SITE_URL = "https://dudusbarbershop.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
