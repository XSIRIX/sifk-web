import { TeamView } from "@/components/views/team-view";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/unser-team", "de");

export default function TeamPage() {
  return <TeamView locale="de" />;
}
