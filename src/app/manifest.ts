import type { MetadataRoute } from "next";

export const dynamic = "force-static"; // <-- REQUIRED for static export

const manifest = (): MetadataRoute.Manifest => ({
  short_name: "triassic",
  name: "Triassic",
  lang: "en",
  start_url: "/",
  background_color: "#FFFFFF",
  theme_color: "#FFFFFF",
  dir: "ltr",
  display: "standalone",
  prefer_related_applications: false,
});

export default manifest;
