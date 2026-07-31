"use client";

/**
 * Global header adapted from Shadcnspace `navbar-08`
 * Above-medium logo + compact primary CTA.
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { ArrowButton } from "@/components/site/arrow-button";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { primaryNav, servicesNav } from "@/lib/navigation";
import { hasPhone, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY >= 24);
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      data-chn-chrome="shadcn-space-navbar-08"
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/80 bg-background/88 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "hidden border-b border-border/50 bg-elevated/80 sm:block",
          !scrolled && "bg-background/40",
        )}
      >
        <div className="container-site flex h-8 items-center justify-between gap-4 text-[11px] tracking-wide text-muted-foreground">
          <div className="flex min-w-0 items-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="truncate transition-colors hover:text-foreground"
            >
              {site.email}
            </a>
            {hasPhone() && (
              <a
                href={`tel:${site.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <Phone className="h-3 w-3" strokeWidth={1.5} />
                {site.phoneDisplay || site.phone}
              </a>
            )}
          </div>
          <span className="hidden shrink-0 text-stone md:inline">
            Complimentary white-glove · {site.builderBonus} builder bonus
          </span>
        </div>
      </div>

      <div className="container-site">
        <nav
          className={cn(
            "flex h-[4.75rem] items-center justify-between gap-5 transition-all duration-500 md:h-[5.25rem]",
            scrolled && "h-[4.25rem] md:h-[4.75rem]",
          )}
          aria-label="Primary"
        >
          <div className="flex min-w-0 flex-1 items-center gap-4 lg:gap-7">
            <Link
              href="/"
              className="relative z-10 flex shrink-0 items-center"
              aria-label={`${site.name} home`}
            >
              {/* Above-medium: ~48–52px desktop, ~40–44px mobile; max ~220–240px */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={site.assets.logoWhite}
                alt={site.name}
                width={240}
                height={52}
                className="h-[42px] w-auto max-w-[200px] object-contain object-left sm:h-[46px] sm:max-w-[220px] md:h-[50px] md:max-w-[230px] lg:h-[52px] lg:max-w-[240px]"
                fetchPriority="high"
              />
            </Link>

            <Separator
              orientation="vertical"
              className="hidden h-6 data-[orientation=vertical]:h-6 lg:block"
            />

            <ul className="hidden min-w-0 items-center gap-0.5 lg:flex">
              {primaryNav.map((item) => {
                if (item.href === "/services") {
                  return (
                    <li
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <div className="inline-flex items-center">
                        <Link
                          href="/services"
                          className={cn(
                            "inline-flex items-center rounded-sm px-2.5 py-2 text-[13px] tracking-wide transition-colors",
                            isActive("/services")
                              ? "text-foreground"
                              : "text-muted-foreground hover:text-foreground",
                          )}
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          className="rounded-sm p-1 text-muted-foreground hover:text-foreground"
                          aria-label="Services menu"
                          aria-expanded={servicesOpen}
                          onClick={() => setServicesOpen((v) => !v)}
                        >
                          <ChevronDown
                            className={cn(
                              "h-3.5 w-3.5 transition-transform",
                              servicesOpen && "rotate-180",
                            )}
                          />
                        </button>
                      </div>
                      {servicesOpen && (
                        <div className="absolute left-0 top-full z-50 w-72 border border-border bg-card/98 p-2 shadow-soft backdrop-blur-xl">
                          <Link
                            href="/services"
                            className="block rounded-sm px-3 py-2 text-sm text-foreground hover:bg-elevated"
                          >
                            All services
                          </Link>
                          <Separator className="my-1" />
                          {servicesNav.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              className="block rounded-sm px-3 py-2 text-sm text-muted-foreground hover:bg-elevated hover:text-foreground"
                            >
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  );
                }
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex whitespace-nowrap rounded-sm px-2.5 py-2 text-[13px] tracking-wide transition-colors",
                        isActive(item.href)
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <div className="hidden sm:block">
              <ArrowButton href="/contact" size="sm">
                Begin Your Journey
              </ArrowButton>
            </div>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[min(100vw,22rem)] border-border bg-background"
              >
                <SheetHeader>
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <div className="flex justify-start">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={site.assets.logoWhite}
                      alt={site.name}
                      width={220}
                      height={48}
                      className="h-11 w-auto max-w-[200px] object-contain object-left"
                    />
                  </div>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-1">
                  {primaryNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-sm px-3 py-3 text-base",
                        isActive(item.href)
                          ? "bg-elevated text-foreground"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Separator className="my-3" />
                  <p className="px-3 text-[11px] uppercase tracking-[0.2em] text-stone">
                    Services
                  </p>
                  {servicesNav.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setOpen(false)}
                      className="rounded-sm px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground"
                    >
                      {s.label}
                    </Link>
                  ))}
                  <div className="mt-6 px-3">
                    <ArrowButton
                      href="/contact"
                      size="sm"
                      className="w-full justify-center"
                      onClick={() => setOpen(false)}
                    >
                      Begin Your Journey
                    </ArrowButton>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
