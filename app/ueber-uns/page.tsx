import { AboutView } from "@/components/views/about-view";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/ueber-uns", "de");

export default function AboutPage() {
  return <AboutView locale="de" />;
}
