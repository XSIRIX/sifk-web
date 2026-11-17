import type { ReactNode } from "react";

import { SiteShell } from "@/components/site-shell";
import { rootMetadata, viewport } from "@/lib/root-metadata";

export const metadata = rootMetadata("en");
export { viewport };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
