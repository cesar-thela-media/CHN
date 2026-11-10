"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { chnCopy } from "@/lib/chn-copy";
import s from "./home-a.module.css";

/** Live nav labels: Home / Services / About, plus the Contact Us button. */
const hrefs = ["/", "#services", "#about"];
const links = chnCopy.nav.links.map((label, i) => ({ href: hrefs[i], label }));

export function HomeNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className={s.nav} aria-label="Primary">
      <ul className={`${s.navLinks} ${open ? s.open : ""}`}>
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/" aria-label={`${site.name} home`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/home/logo-white-stacked.png"
          alt="Custom Home Network Logo - Luxury Home Builder"
          width={148}
          height={84}
          className={s.navLogo}
          fetchPriority="high"
        />
      </Link>
      <div className={s.navRight}>
        <Link href="/contact" className={s.navCta}>
          {chnCopy.nav.cta}
        </Link>
        <button
          type="button"
          className={s.menuBtn}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} strokeWidth={1.25} /> : <Menu size={20} strokeWidth={1.25} />}
        </button>
      </div>
    </nav>
  );
}
