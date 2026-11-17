import type { ReactNode } from "react";

import { SiteShell } from "@/components/site-shell";
import { rootMetadata, viewport } from "@/lib/root-metadata";

export const metadata = rootMetadata("de");
export { viewport };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <SiteShell locale="de">{children}</SiteShell>;
}
