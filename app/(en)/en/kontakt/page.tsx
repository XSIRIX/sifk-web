import { ContactView } from "@/components/views/contact-view";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/kontakt", "en");

export default function ContactPageEn() {
  return <ContactView locale="en" />;
}
