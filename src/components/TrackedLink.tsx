"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

import { track, type EventName } from "@/lib/track";

type Props = Omit<ComponentProps<"a">, "href"> & {
  href: string;
  /** Melyik számlálót növelje. */
  event: EventName;
  /** Mire kattintottak (gomb szövege, terméknév, elhelyezés). */
  label?: string;
  /** tel:/mailto:/#horgony/külső link esetén sima <a>-t renderel next/link helyett. */
  plain?: boolean;
};

/**
 * Link, ami kattintáskor jelez a /api/track felé. Szerver-komponensből is
 * használható (kliens-komponens), a megjelenése a className-en át öröklődik.
 */
export default function TrackedLink({ href, event, label, plain, onClick, children, ...rest }: Props) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    track(event, label);
    onClick?.(e);
  };

  const isPlain = plain ?? (/^(tel:|mailto:|https?:\/\/|#|\/\/)/.test(href));

  if (isPlain) {
    return (
      <a href={href} onClick={handleClick} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
