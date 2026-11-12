import { HomeView } from "@/components/views/home-view";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/", "en");

export default function HomePageEn() {
  return <HomeView locale="en" />;
}
