import { AboutView } from "@/components/views/about-view";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/ueber-uns", "en");

export default function AboutPageEn() {
  return <AboutView locale="en" />;
}
