import { StructuredData } from "@/components/structured-data";
import { VoucherView } from "@/components/views/voucher-view";
import { getContent } from "@/lib/content";
import { createPageMetadata, pageUrl } from "@/lib/seo";
import { breadcrumbStructuredData } from "@/lib/structured-data";

export const metadata = createPageMetadata("/beratungsgutscheine-afrika", "de");

// Re-render hourly, so the page switches to its "ended" copy after the deadline without a redeploy.
export const revalidate = 3600;

export default function VoucherPage() {
  const crumb = getContent("de").voucher?.crumb ?? "Beratungsgutscheine Afrika";

  return (
    <>
      <StructuredData
        data={breadcrumbStructuredData([
          { name: "Start", url: pageUrl("/", "de") },
          { name: crumb, url: pageUrl("/beratungsgutscheine-afrika", "de") }
        ])}
      />
      <VoucherView now={new Date()} />
    </>
  );
}
