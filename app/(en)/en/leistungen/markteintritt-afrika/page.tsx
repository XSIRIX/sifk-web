import { ServicePageRoute } from "@/components/views/service-page-view";
import { getContent } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/leistungen/markteintritt-afrika", "en");

export default function AfricaPage() {
  return (
    <ServicePageRoute
      description={String(metadata.description)}
      locale="en"
      page={getContent("en").servicePages.africa}
    />
  );
}
