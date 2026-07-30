"use client";

/**
 * Global header adapted from Shadcnspace `navbar-08`
 * (NavigationMenu + Sheet mobile drawer), restyled to CHN editorial tokens.
 */
import Image from "next/image";
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
        <div className="container-site flex h-9 items-center justify-between gap-4 text-[11px] tracking-wide text-muted-foreground">
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
            "flex h-[4.25rem] items-center justify-between gap-4 transition-all duration-500 md:h-[4.5rem]",
            scrolled && "md:h-16",
          )}
          aria-label="Primary"
        >
          <div className="flex min-w-0 items-center gap-6 lg:gap-8">
            <Link
              href="/"
              className="relative z-10 shrink-0"
              aria-label={`${site.name} home`}
            >
              <Image
                src={site.assets.logoWhite}
                alt={site.name}
                width={148}
                height={42}
                className="h-8 w-auto object-contain md:h-9"
                priority
              />
            </Link>

            <Separator
              orientation="vertical"
              className="hidden h-5 data-[orientation=vertical]:h-5 lg:block"
            />

            <ul className="hidden items-center gap-0.5 lg:flex">
              {primaryNav.map((item) => {
                if (item.href === "/services") {
                  return (
                    <li key={item.href} className="relative">
                      <button
                        type="button"
                        className={cn(
                          "inline-flex items-center gap-1 rounded-sm px-3 py-2 text-[13px] tracking-wide transition-colors",
                          isActive("/services")
                            ? "text-foreground"
                            : "text-muted-foreground hover:text-foreground",
                        )}
                        aria-expanded={servicesOpen}
                        onClick={() => setServicesOpen((v) => !v)}
                        onBlur={() => {
                          window.setTimeout(() => setServicesOpen(false), 150);
                        }}
                      >
                        Services
                        <ChevronDown
                          className={cn(
                            "h-3.5 w-3.5 transition-transform",
                            servicesOpen && "rotate-180",
                          )}
                        />
                      </button>
                      {servicesOpen && (
                        <div className="absolute left-0 top-full z-50 mt-1 min-w-[14rem] border border-border bg-card p-2 shadow-soft">
                          <Link
                            href="/services"
                            className="block rounded-sm px-3 py-2 text-sm text-foreground hover:bg-secondary"
                          >
                            All services
                          </Link>
                          {servicesNav.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              className="block rounded-sm px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
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
                        "inline-flex rounded-sm px-3 py-2 text-[13px] tracking-wide transition-colors",
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

          <div className="hidden items-center gap-3 lg:flex">
            <ArrowButton
              href="/contact"
              className="h-10 ps-5 pe-12 text-xs hover:ps-12 hover:pe-5"
            >
              {site.ctaPrimary}
            </ArrowButton>
          </div>

          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-11 w-11 rounded-sm border-border"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background p-0">
                <SheetHeader className="border-b border-border">
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-1 flex-col gap-1 px-4 py-4">
                  {primaryNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "border-b border-border/60 py-3.5 text-base transition-colors",
                        isActive(item.href)
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="mt-6">
                    <ArrowButton
                      href="/contact"
                      className="w-full justify-start"
                      onClick={() => setOpen(false)}
                    >
                      {site.ctaPrimary}
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
