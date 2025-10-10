"use client";

import { mainHeading } from "@/lib";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function MainSection() {
  let boxEl = useRef<HTMLElement | null>(null);
  let headingEl = useRef<HTMLHeadingElement | null>(null);
  let linkEl = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    let tl = gsap.timeline({ defaults: { duration: 0.4, ease: "sine.inOut" } });

    tl.from(boxEl.current, {
      opacity: 0,
    })
      .from(headingEl.current, {
        opacity: 0,
        y: -20,
      })
      .from(linkEl.current, {
        opacity: 0,
        y: -20,
      });
  }, []);

  return (
    <main className="relative isolate px-4" ref={boxEl}>
      <span className="border-surface-variant absolute inset-0 bottom-0 -z-10 border-b"></span>
      <div className="border-x-surface-variant flex h-[95dvh] w-full max-w-6xl flex-col items-end justify-end gap-4 place-self-center border-x p-4 md:gap-6 md:p-6 2xl:max-w-7xl">
        <span className="to-surface relative min-h-[30dvh] w-full max-w-xl overflow-hidden bg-gradient-to-b from-transparent">
          <h2
            className="absolute inset-0 -z-10 text-xl leading-relaxed text-pretty md:text-2xl"
            ref={headingEl}
          >
            {mainHeading}
          </h2>
        </span>
        <Link
          href={"/"}
          className="group flex w-full max-w-xl items-center justify-between gap-4"
          ref={linkEl}
        >
          <span className="text-sm uppercase opacity-40 transition-opacity duration-400 group-hover:opacity-100">
            [about me]
          </span>
          <span className="border-surface-variant relative isolate overflow-hidden rounded-full border p-3">
            <ArrowRightIcon
              weight="bold"
              className="size-6 transition-transform duration-400 group-hover:translate-x-20"
            />
            <ArrowRightIcon
              weight="bold"
              className="absolute bottom-3 size-6 -translate-x-20 transition-transform duration-400 group-hover:translate-x-0"
            />
          </span>
        </Link>
      </div>
    </main>
  );
}
