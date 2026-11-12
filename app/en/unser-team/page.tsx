import { TeamView } from "@/components/views/team-view";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/unser-team", "en");

export default function TeamPageEn() {
  return <TeamView locale="en" />;
}
