import { CloodyView } from "@/components/views/cloody-view";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/cloody", "en");

export default function CloodyPageEn() {
  return <CloodyView locale="en" />;
}
