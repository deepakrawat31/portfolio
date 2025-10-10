"use client";

import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Header() {
  let headerEl = useRef<HTMLElement | null>(null);
  let linkEl = useRef<HTMLAnchorElement | null>(null);
  let lastScroll = 0;
  let isHidden = false;

  useEffect(() => {
    let tl = gsap.timeline({ defaults: { duration: 0.4, ease: "sine.inOut" } });

    tl.from(headerEl.current, {
      opacity: 0,
    }).from(linkEl.current, {
      opacity: 0,
      y: -20,
    });

    const handleScroll = (): void => {
      const current: number = window.scrollY;

      if (current > lastScroll && current >= 40 && !isHidden) {
        gsap.to(headerEl.current, {
          y: -headerEl.current!.offsetHeight,
          duration: 0.4,
          ease: "sine.inOut",
        });
        isHidden = true;
      } else if (current < lastScroll && isHidden) {
        gsap.to(headerEl.current, {
          y: 0,
          duration: 0.4,
          ease: "sine.inOut",
        });
        isHidden = false;
      }
      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="border-b-surface-variant bg-surface fixed top-0 z-50 w-full border-b px-4 transition-transform duration-400"
      ref={headerEl}
    >
      <nav className="border-x-surface-variant flex w-full max-w-6xl items-center justify-between gap-4 place-self-center border-x p-4 md:p-6 2xl:max-w-7xl">
        <Link
          href="/"
          className="font-cervanttis text-primary flex flex-col gap-2 text-2xl font-bold **:leading-none"
          ref={linkEl}
        >
          <span>deepak</span>
          <span>rawat</span>
        </Link>
      </nav>
    </header>
  );
}
