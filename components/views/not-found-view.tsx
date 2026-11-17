import Link from "next/link";

import { ArrowIcon } from "@/components/icons";
import { PageHero } from "@/components/page-parts";
import { localizePath, type Locale } from "@/lib/locale-routing";
import { sharedCopy } from "@/lib/shared-copy";

export function NotFoundView({ locale }: { locale: Locale }) {
  const copy = sharedCopy[locale].notFound;

  return (
    <PageHero field="f-plaster" text={copy.text} title={copy.title}>
      <Link className="link" href={localizePath("/", locale)}>
        {copy.home}
        <ArrowIcon />
      </Link>
    </PageHero>
  );
}
