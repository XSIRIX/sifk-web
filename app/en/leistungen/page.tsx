import { ServicesView } from "@/components/views/services-view";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/leistungen", "en");

export default function ServicesPageEn() {
  return <ServicesView locale="en" />;
}
