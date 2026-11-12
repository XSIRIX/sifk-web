import { MailIcon } from "@/components/icons";
import { Monogram } from "@/components/monogram";
import { NetworkMap } from "@/components/network-map";
import { PageHero, WovenMosaic } from "@/components/page-hero";
import { CloseBand } from "@/components/page-parts";
import { Reveal } from "@/components/reveal";
import { getContent, type TeamMember } from "@/lib/content";
import type { Locale } from "@/lib/locale-routing";
import { buildTeamEmail } from "@/lib/team-email";

function PersonCard({ member, emailTo, featured = false, index = 0 }: { member: TeamMember; emailTo: string; featured?: boolean; index?: number }) {
  const email = buildTeamEmail(member.name);
  const meta = [member.location, member.qualification, member.org].filter(Boolean).join(" · ");

  return (
    <Reveal as="li" className={`person${featured ? " person-featured" : ""}`} index={index}>
      <Monogram countries={member.countries} name={member.name} size={featured ? "lg" : "md"} />
      <div className="person-body">
        <h3 className="person-name">{member.name}</h3>
        <p className="person-role">{member.role}</p>
        <p className="person-meta">{meta}</p>
        <p className="person-text">{member.text}</p>
        {member.areas ? (
          <ul className="tag-list">
            {member.areas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        ) : null}
        {member.languages ? <p className="person-meta">{member.languages}</p> : null}
        <a aria-label={`${emailTo} ${member.name}: ${email}`} className="person-email" href={`mailto:${email}`}>
          <MailIcon />
          {email}
        </a>
      </div>
    </Reveal>
  );
}

export function TeamView({ locale }: { locale: Locale }) {
  const { team } = getContent(locale);

  return (
    <>
      <PageHero className="page-hero-mosaic" media={<WovenMosaic />} text={team.intro.text} title={team.intro.title} />

      <section className="team-map">
        <div className="shell">
          <NetworkMap locale={locale} tone="on-light" />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2 className="display-3 section-title">{team.leadership.title}</h2>
          <ul className="people-grid-featured">
            {team.leadership.members.map((member, index) => (
              <PersonCard emailTo={team.emailTo} featured index={index} key={member.name} member={member} />
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-tight">
        <div className="shell">
          <div className="section-head-split">
            <h2 className="display-3">{team.africaDesk.title}</h2>
            <p className="lead">{team.africaDesk.text}</p>
          </div>
          <ul className="people-grid-cards">
            {team.africaDesk.members.map((member, index) => (
              <PersonCard emailTo={team.emailTo} index={index % 3} key={member.name} member={member} />
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-tight" id="internationales-team">
        <div className="shell">
          <div className="section-head-split">
            <h2 className="display-3">{team.onSite.title}</h2>
            <p className="lead">{team.onSite.text}</p>
          </div>
          <ul className="people-grid-cards">
            {team.onSite.members.map((member, index) => (
              <PersonCard emailTo={team.emailTo} index={index % 3} key={member.name} member={member} />
            ))}
          </ul>
        </div>
      </section>

      <CloseBand locale={locale} text={team.close.text} title={team.close.title} />
    </>
  );
}
