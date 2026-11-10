"use client";

/**
 * The variant A homepage draws its own nav and footer (centred logo nav,
 * wordmark footer), so the global chrome steps aside on "/" only.
 * Every other route keeps the existing Header and Footer unchanged.
 */
import { usePathname } from "next/navigation";

export function HideOnHome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <>{children}</>;
}
