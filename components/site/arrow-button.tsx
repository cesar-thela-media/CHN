import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark" | "outline";
  onClick?: () => void;
};

/** Sliding-arrow CTA (Shadcnspace-inspired), CHN brand. */
export function ArrowButton({
  href,
  children,
  className,
  variant = "light",
  onClick,
}: Props) {
  const styles = {
    light: "bg-primary text-primary-foreground hover:bg-primary/90",
    dark: "bg-foreground/10 text-foreground border border-line hover:bg-foreground/15",
    outline:
      "bg-transparent text-foreground border border-line hover:border-foreground/30",
  }[variant];

  const knob =
    variant === "light"
      ? "bg-background text-foreground"
      : "bg-primary text-primary-foreground";

  const classNames = cn(
    "group relative inline-flex h-12 items-center overflow-hidden rounded-full p-1 ps-6 pe-14 text-sm font-medium transition-all duration-500 hover:ps-14 hover:pe-6",
    styles,
    className,
  );

  const inner = (
    <>
      <span className="relative z-10 transition-all duration-500">{children}</span>
      <span
        className={cn(
          "absolute right-1 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45",
          knob,
        )}
      >
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </>
  );

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classNames} onClick={onClick}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classNames} onClick={onClick}>
      {inner}
    </Link>
  );
}
