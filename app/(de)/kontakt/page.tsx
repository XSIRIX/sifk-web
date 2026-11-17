import { ContactView } from "@/components/views/contact-view";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/kontakt", "de");

export default function ContactPage() {
  return <ContactView locale="de" />;
}
