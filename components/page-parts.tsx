import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { ArrowIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { WeaveBand } from "@/components/weave-band";
import { company } from "@/lib/company";
import { getContent } from "@/lib/content";
import { localizePath, type Locale } from "@/lib/locale-routing";

type PageIntroProps = {
  title: string;
  text: string;
  children?: ReactNode;
  className?: string;
};

export function PageIntro({ title, text, children, className = "" }: PageIntroProps) {
  return (
    <section className={`page-intro${children ? " has-aside" : ""} ${className}`}>
      <div className="shell page-intro-grid">
        <div className="page-intro-copy">
          <h1 className="display-1 intro-title">{title}</h1>
          <p className="lead">{text}</p>
        </div>
        {children ? <div className="page-intro-aside">{children}</div> : null}
      </div>
    </section>
  );
}

type CloseBandProps = {
  locale: Locale;
  title: string;
  text: string;
};

export function CloseBand({ locale, title, text }: CloseBandProps) {
  const { common } = getContent(locale);

  return (
    <section className="close-band" data-tone="dark">
      <WeaveBand className="close-band-seam" />
      <div aria-hidden="true" className="close-band-media">
        <Image alt="" fill sizes="100vw" src="/brand/weave-b.webp" />
      </div>
      <div className="shell close-grid">
        <div>
          <h2 className="display-1 close-title">{title}</h2>
          <p className="lead">{text}</p>
        </div>
        <div className="close-actions">
          <Link className="button button-primary button-large" href={localizePath(common.firstCall.href, locale)}>
            {common.firstCall.label}
            <ArrowIcon className="icon button-arrow" />
          </Link>
          <a className="contact-line" href={company.phoneHref}>
            <PhoneIcon />
            <span>
              <span className="contact-line-label">{common.phone}</span>
              {company.phoneDisplay}
            </span>
          </a>
          <a className="contact-line" href={`mailto:${company.email}`}>
            <MailIcon />
            <span>
              <span className="contact-line-label">{common.email}</span>
              {company.email}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function TextLink({ href, locale, children }: { href: string; locale: Locale; children: ReactNode }) {
  return (
    <Link className="text-link text-link-arrow" href={localizePath(href, locale)}>
      {children}
      <ArrowIcon />
    </Link>
  );
}
