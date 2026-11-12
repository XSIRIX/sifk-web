import { CloodyView } from "@/components/views/cloody-view";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/cloody", "de");

export default function CloodyPage() {
  return <CloodyView locale="de" />;
}
