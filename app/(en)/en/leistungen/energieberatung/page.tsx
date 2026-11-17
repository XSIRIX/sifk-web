import { ServicePageRoute } from "@/components/views/service-page-view";
import { getContent } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/leistungen/energieberatung", "en");

export default function EnergyPage() {
  return (
    <ServicePageRoute
      description={String(metadata.description)}
      locale="en"
      page={getContent("en").servicePages.energy}
    />
  );
}
