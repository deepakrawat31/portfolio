"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function footer() {
  let boxEl = useRef<HTMLElement | null>(null);
  let topDivEl = useRef<HTMLDivElement | null>(null);
  let botDivEl = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let tl = gsap.timeline({
      defaults: { duration: 0.4, ease: "sine.inOut" },
    });

    let footerTl = gsap.timeline({
      defaults: { duration: 0.4, ease: "sine.inOut" },
      scrollTrigger: {
        trigger: boxEl.current,
        start: "top 70%",
        end: "bottom center",
      },
    });

    tl.from(boxEl.current, {
      opacity: 0,
    });

    footerTl
      .from(topDivEl.current, {
        y: -20,
        opacity: 0,
      })
      .from(botDivEl.current, {
        y: -20,
        opacity: 0,
      });
  }, []);

  return (
    <footer className="px-4" ref={boxEl}>
      <div className="border-x-surface-variant flex h-[40dvh] w-full max-w-6xl flex-col justify-between gap-4 place-self-center border-x p-4 md:p-6 2xl:max-w-7xl">
        <div className="flex justify-between gap-4" ref={topDivEl}>
          <nav className="flex flex-col gap-4 **:opacity-40 **:transition-opacity **:duration-400 **:hover:opacity-100">
            <a href="/">Github</a>
            <a href="/">X / Twitter</a>
          </nav>
          <span className="font-cervanttis text-primary text-2xl font-bold">
            deepak rawat
          </span>
        </div>
        <div
          className="flex items-end justify-between gap-4 uppercase opacity-40"
          ref={botDivEl}
        >
          <span>frontend developer</span>
          <span>2025</span>
        </div>
      </div>
    </footer>
  );
}
