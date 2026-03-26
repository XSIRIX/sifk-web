"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { getLocaleFromPathname } from "@/lib/locale-routing";

export function LocaleDocumentController() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = getLocaleFromPathname(pathname);
  }, [pathname]);

  return null;
}
