import { ServicePageRoute } from "@/components/views/service-page-view";
import { getContent } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/leistungen/energieberatung", "de");

export default function EnergyPage() {
  return (
    <ServicePageRoute
      description={String(metadata.description)}
      locale="de"
      page={getContent("de").servicePages.energy}
    />
  );
}
