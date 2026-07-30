import type { MetadataRoute } from "next";
import { ALBUMS } from "@/lib/albums";

const SITE_URL = "https://hubristicdonkey.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/work`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/book`, changeFrequency: "yearly", priority: 0.6 },
  ];

  const albumRoutes: MetadataRoute.Sitemap = ALBUMS.map((album) => ({
    url: `${SITE_URL}/work/${album.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...albumRoutes];
}
