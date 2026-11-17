import Link from "next/link";

import { ArrowIcon } from "@/components/icons";
import { CtaBand, PageHero } from "@/components/page-parts";
import { PLACE_FIELD } from "@/components/views/home-view";
import { getContent, type CountryCode, type TeamMember } from "@/lib/content";
import { localizePath, type Locale } from "@/lib/locale-routing";
import { buildTeamEmail } from "@/lib/team-email";

const TITLES = new Set(["dr.", "dr", "prof.", "prof"]);

function initials(name: string) {
  const parts = name.split(/\s+/).filter((part) => !TITLES.has(part.toLowerCase()));
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? "") : "";
  return (first + last).toUpperCase();
}

export function TeamView({ locale }: { locale: Locale }) {
  const { team, home, places, countries } = getContent(locale);

  // No portraits are invented. A person's tile carries their initials on the
  // colour of the country they work from.
  const person = (member: TeamMember) => {
    const code = member.countries[0];
    const email = buildTeamEmail(member.name);

    return (
      <li className="person" key={member.name}>
        <div className={`person-tile ${PLACE_FIELD[code]}`}>
          <img alt="" className="flag person-flag" decoding="async" height={512} loading="lazy" src={`/flags/${code}.svg`} width={512} />
          <b aria-hidden="true">{initials(member.name)}</b>
          <span>{countries[code]}</span>
        </div>
        <h3>{member.name}</h3>
        <p className="person-role">
          {member.role}
          <br />
          {member.location}
          {member.org ? `, ${member.org}` : ""}
        </p>
        <p className="person-meta">{member.text}</p>
        {member.qualification ? <p className="person-meta">{member.qualification}</p> : null}
        {member.languages ? <p className="person-meta">{member.languages}</p> : null}
        <a aria-label={`${team.emailTo} ${member.name}`} className="inline-link" href={`mailto:${email}`}>
          {email}
        </a>
      </li>
    );
  };

  // Each country's model stands once, at the head of the group it belongs to.
  const groupPlaces = (members: TeamMember[]) => {
    const codes = [...new Set(members.map((member) => member.countries[0]))] as CountryCode[];
    return (
      <ul className="team-places" data-rv="kids">
        {codes.map((code) => (
          <li key={code}>
            <div className={`team-place ${PLACE_FIELD[code]}`}>
              <img alt={places.alt[code]} decoding="async" height={900} loading="lazy" src={`/world/${code}.webp`} width={900} />
            </div>
            <span>{countries[code]}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <PageHero
        field="f-lime"
        photo={{ src: "/people/team.webp", alt: team.intro.photoAlt, width: 1800, height: 1200 }}
        text={team.intro.text}
        title={team.intro.title}
      />

      <section className="team-group sheet field f-white">
        <div className="shell">
          <div className="team-head">
            <div className="team-say">
              <h2 className="display" data-split>
                {team.leadership.title}
              </h2>
              <Link className="link" href={localizePath(team.leadership.link.href, locale)}>
                {team.leadership.link.label}
                <ArrowIcon />
              </Link>
            </div>
            {groupPlaces(team.leadership.members)}
          </div>
          <ul className="people is-lead" data-rv="kids">
            {team.leadership.members.map(person)}
          </ul>
        </div>
      </section>

      <section className="team-group sheet field f-plaster">
        <div className="shell">
          <div className="team-head">
            <div className="team-say">
              <h2 className="display" data-split>
                {team.africaDesk.title}
              </h2>
              <p className="lead" data-rv>
                {team.africaDesk.text}
              </p>
              <Link className="link" href={localizePath(team.africaDesk.link.href, locale)}>
                {team.africaDesk.link.label}
                <ArrowIcon />
              </Link>
            </div>
            {groupPlaces(team.africaDesk.members)}
          </div>
          <ul className="people" data-rv="kids">
            {team.africaDesk.members.map(person)}
          </ul>
        </div>
      </section>

      <section className="team-group sheet field f-white">
        <div className="shell">
          <div className="team-head">
            <div className="team-say">
              <h2 className="display" data-split>
                {team.onSite.title}
              </h2>
              <p className="lead" data-rv>
                {team.onSite.text}
              </p>
            </div>
            {groupPlaces(team.onSite.members)}
          </div>
          <ul className="people" data-rv="kids">
            {team.onSite.members.map(person)}
          </ul>
        </div>
      </section>

      <section className="team-group sheet field f-plaster">
        <div className="shell">
          <div className="team-head">
            <div className="team-say">
              <h2 className="display" data-split>
                {team.more.title}
              </h2>
              <p className="lead" data-rv>
                {team.more.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        field="f-glut"
        href={localizePath("/kontakt", locale)}
        text={team.close.text}
        title={team.close.title}
        word={home.closeWord}
      />
    </>
  );
}
