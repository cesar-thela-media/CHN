/**
 * Variant A homepage (Cesar's pick, Nov 11 2026): dark editorial layout,
 * Fraunces display + Inter body, live copy verbatim from customhomenetwork.com.
 * Visual target: the approved full-page mock (variant-a/desktop-full.png).
 *
 * Landon's rules: video hero, two-column sections alternating sides,
 * full-width photo breaks, no sticky or pinned scroll animation.
 */
import Image from "next/image";
import Link from "next/link";
import { chnCopy, sourceServices } from "@/lib/chn-copy";
import { site } from "@/lib/site";
import { HomeNav } from "./home-nav";
import { HomeContactForm, HomeNewsletterForm } from "./home-forms";
import { rich } from "./rich";
import s from "./home-a.module.css";

const IMG = {
  heroPoster: "/images/home/hero-poster.jpg",
  pinnacle: "/images/home/video-interior.jpg",
  pinnacleInset: "/images/home/custombuilding.jpg",
  value: "/images/home/unlockvalue.jpg",
  services: "/images/home/projectmanagement.jpg",
  who: "/images/home/land-sunset.jpg",
  insights: "/images/home/video-dining.jpg",
  contact: "/images/home/luxurypool.jpg",
};

/** Splits the live bonus sentence around "0.5% bonus incentive" without rewording it. */
function bonusParts(sentence: string) {
  const m = sentence.match(/^(.*?)\s+(\d+(?:\.\d+)?)%\s+(bonus incentive)\s+(.*)$/);
  if (!m) return null;
  return { pre: m[1], num: m[2], label: m[3], post: m[4] };
}

export function HomePageA() {
  const c = chnCopy;
  const bonus = bonusParts(c.value.paragraphs[1]);
  const footerHrefs = ["/", "/buyers", "/partners", "/contact"];
  // PENDING (Cesar): real social profile URLs; site.social is empty, so links fall back to "#".
  const socialHrefs = [site.social.facebook, site.social.instagram, site.social.linkedin];

  return (
    <div className={s.page} data-home="variant-a">
      {/* Hero: live CHN.mp4, looping, muted, with a poster frame. */}
      <section className={`${s.hero} ${s.photoEm}`}>
        <HomeNav />
        {/* PENDING (Matt/Cesar): final hero footage; the live CHN.mp4 is used until then. */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={IMG.heroPoster}
          aria-label="Custom home building showcase video"
        >
          <source src={site.assets.heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={s.heroVeil} />
        <div className={s.heroCopy}>
          <h1>{rich(c.hero.title, ["Home", "Starts"], "Journey", s.line)}</h1>
          <p className={s.heroBody}>{c.hero.body}</p>
          <Link href="/contact" className={s.btn}>
            {c.hero.primaryCta}
          </Link>
        </div>
        <div className={s.scroll}>{c.hero.scroll}</div>
      </section>

      {/* Pinnacle: photo left, bleeding off the edge, with a framed inset. */}
      <section id="about" className={`${s.split} ${s.pin}`}>
        <div className={`${s.media} ${s.shadeR}`}>
          <Image src={IMG.pinnacle} alt="Luxury custom home construction showcasing pinnacle of home building excellence" fill sizes="(max-width: 768px) 100vw, 50vw" className={s.ph} />
          <div className={s.inset}>
            <Image src={IMG.pinnacleInset} alt="Luxury custom home building and construction with premium craftsmanship and attention to detail" fill sizes="270px" className={s.ph} />
          </div>
        </div>
        <div className={s.txt}>
          <div className={s.lab}>01</div>
          <h2>{rich(c.experience.title, ["Pinnacle", "Home"], "Pinnacle", s.line)}</h2>
          {c.experience.paragraphs.map((p) => (
            <p key={p} className={s.body}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Value: text left, photo right; the 0.5% is set as a large numeral. */}
      <section className={`${s.split} ${s.val}`}>
        <div className={s.txt}>
          <div className={s.lab}>02</div>
          <h2>{rich(c.value.eyebrow, ["Value"], undefined, s.line)}</h2>
          <p className={s.body}>{c.value.paragraphs[0]}</p>
          {bonus ? (
            <div className={s.num}>
              <div className={s.big}>
                {bonus.num}
                <sup>%</sup>
              </div>
              <p className={s.sm}>{bonus.pre}</p>
              <div>
                <p className={s.bi}>
                  {bonus.label}
                </p>
                <p className={s.sm}>{bonus.post}</p>
              </div>
            </div>
          ) : (
            <p className={s.body}>{c.value.paragraphs[1]}</p>
          )}
        </div>
        <div className={`${s.media} ${s.shadeL}`}>
          <Image src={IMG.value} alt="Premium custom home building value proposition showcasing luxury construction benefits" fill sizes="(max-width: 768px) 100vw, 48vw" className={s.ph} />
        </div>
      </section>

      {/* Services: photo left, numbered list right. */}
      <section id="services" className={`${s.split} ${s.svc}`}>
        <div className={`${s.media} ${s.shadeR}`}>
          <Image src={IMG.services} alt="Personalized project management for custom home construction with comprehensive oversight" fill sizes="(max-width: 768px) 100vw, 36vw" className={s.ph} />
        </div>
        <div className={s.txt}>
          <div className={s.lab}>03</div>
          <h2>{rich(c.services.title, ["Suite"], undefined, s.line)}</h2>
          <p className={s.sub}>{c.services.subtitle}</p>
          <ol className={s.list}>
            {sourceServices.map((svc, i) => (
              <li key={svc.slug}>
                <span className={s.n}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{svc.title}</h3>
                <p>{svc.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Who We Are: centred mission statement over a full-width photo. */}
      <section className={s.who}>
        <h2 className={s.lab}>{c.whoWeAre.title}</h2>
        <p className={s.stmt}>{rich(c.whoWeAre.paragraphs[1], [], "as smooth and rewarding")}</p>
        <p className={s.body}>{c.whoWeAre.paragraphs[0]}</p>
        <div className={s.wide}>
          <Image src={IMG.who} alt="Custom home land acquisition and property evaluation services for luxury home construction" fill sizes="100vw" className={s.ph} />
        </div>
      </section>

      {/* Insights: full-width photo break (the live "blog" banner). */}
      <section className={`${s.ins} ${s.photoEm}`}>
        <Image src={IMG.insights} alt="Beautiful luxury home interior design showcasing personalized custom home styling and decor" fill sizes="100vw" className={s.ph} />
        <div className={s.insCopy}>
          <div className={s.lab}>04</div>
          <h2>{rich(c.insights.title, ["your personality"], "personality")}</h2>
          {/* PENDING (Cesar): confirm the Insights destination; the live site has no blog page, the repo's /insights is used. */}
          <Link href="/insights" className={s.btn}>
            {c.insights.cta}
          </Link>
        </div>
      </section>

      {/* Contact: form left, pool photo right. */}
      <section id="contact" className={`${s.split} ${s.con}`}>
        <div className={s.txt}>
          <h2 className={s.lab}>{c.contact.eyebrow}</h2>
          <p className={s.conTitle}>{rich(c.contact.title, ["Together."], "Together.", s.line)}</p>
          <p className={s.body}>{c.contact.body}</p>
          <HomeContactForm cta={c.contact.cta} />
        </div>
        <div className={`${s.media} ${s.shadeL}`}>
          <Image src={IMG.contact} alt="Luxury custom home exterior with pool at night showcasing premium outdoor living space" fill sizes="(max-width: 768px) 100vw, 50vw" className={s.ph} />
        </div>
      </section>

      {/* Newsletter strip. */}
      <section className={s.news}>
        <h3>{c.newsletter.title}</h3>
        <p>{c.newsletter.body}</p>
        <HomeNewsletterForm cta={c.newsletter.cta} />
      </section>

      {/* Footer with live copy and a full-width wordmark. */}
      <footer className={s.ft}>
        <div className={s.cols}>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/home/logo-white-stacked.png" alt="Custom Home Network Logo - Luxury Home Builder" width={194} height={110} className={s.ftLogo} loading="lazy" />
            <p className={s.body} style={{ maxWidth: 340 }}>
              {c.footer.tagline}
            </p>
          </div>
          <div>
            <h4>{c.footer.quickLinksTitle}</h4>
            <ul>
              {c.footer.quickLinks.map((label, i) => (
                <li key={label}>
                  <Link href={footerHrefs[i]}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{c.footer.connectTitle}</h4>
            <ul>
              {c.footer.connect.map((item, i) => (
                <li key={item.label}>
                  <a href={socialHrefs[i] || "#"}>
                    <span className={s.emo} aria-hidden>
                      {item.icon}
                    </span>{" "}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/*
            PENDING (Cesar): contact block. The live homepage shows no email, phone or
            service area (site meta service-area = "TBD"). Left empty on purpose.
          */}
          <div aria-hidden />
        </div>
        <p className={s.wm}>{c.footer.wordmark.join(" ")}</p>
        <div className={s.bt}>
          <span>{c.footer.copyright}</span>
          {/* PENDING (Cesar): legal links (privacy / terms) are not on the live homepage. */}
        </div>
      </footer>
    </div>
  );
}
