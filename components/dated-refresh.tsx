"use client";

import { useEffect } from "react";

import { needsRefresh } from "@/lib/dated";

/**
 * The page is cached for an hour. The first visitor after a quiet spell can still get a copy
 * rendered before the end date. This reloads once, so the visitor sees the ended version
 * that the server rebuilds in the background.
 */
export function DatedRefresh({ until, ended }: { until: string; ended: boolean }) {
  useEffect(() => {
    if (!needsRefresh(until, ended, new Date())) return;
    const key = `dated-refresh:${location.pathname}:${until}`;
    try {
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, "1");
    } catch {
      return;
    }
    location.reload();
  }, [until, ended]);

  return <span data-dated-ended={String(ended)} data-dated-until={until} hidden />;
}
