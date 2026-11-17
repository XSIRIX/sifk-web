import { HomeView } from "@/components/views/home-view";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/", "de");

export default function HomePage() {
  return <HomeView locale="de" />;
}
