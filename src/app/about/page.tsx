"use client";

import { expertise, mainHeading, subHeading } from "@/lib";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function About() {
  let boxEl = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    let tl = gsap.timeline({
      defaults: { duration: 0.4, ease: "sine.inOut" },
    });

    let skillTl = gsap.timeline({
      defaults: { duration: 0.4, ease: "sine.inOut" },
      scrollTrigger: {
        trigger: ".skill-animate",
        start: "top 80%",
        end: "bottom center",
      },
    });

    tl.from(boxEl.current, {
      opacity: 0,
    })
      .from(".hr", {
        width: 0,
      })
      .from(".text-animate", {
        opacity: 0,
        y: -20,
        stagger: {
          each: 0.4,
          ease: "sine.inOut",
        },
      });

    skillTl.from(".skill-animate", {
      opacity: 0,
      y: -20,
      stagger: {
        each: 0.2,
        ease: "sine.inOut",
      },
    });
  }, []);

  return (
    <section className="relative isolate px-4" ref={boxEl}>
      <span className="border-surface-variant absolute inset-0 bottom-0 -z-10 border-b"></span>
      <div className="border-x-surface-variant flex min-h-dvh w-full max-w-6xl flex-col items-end gap-4 place-self-center border-x p-4 md:gap-6 md:p-6 2xl:max-w-7xl">
        <h2 className="text-animate text-primary font-cervanttis place-self-start pt-24 text-xl font-bold lowercase">
          Deepak Rawat
        </h2>
        <div className="flex flex-col gap-4 md:gap-6">
          <h4 className="text-animate w-full max-w-xl text-xl leading-relaxed text-pretty md:text-2xl">
            {mainHeading}
          </h4>
          <p className="text-animate w-full max-w-xl text-base leading-relaxed text-pretty opacity-40 md:text-xl">
            {subHeading}
          </p>
        </div>
        <hr className="text-surface-variant hr w-full" />
        <h3 className="flex flex-col gap-2 place-self-start">
          <span className="text-animate">Expertise</span>
          <span className="text-animate opacity-40">I Work Well With</span>
        </h3>
        <p className="text-animate w-full max-w-xl text-base leading-relaxed text-pretty opacity-40 md:text-xl">
          I craft sleek, high-performance websites — blending design precision
          with clean, scalable code.
        </p>
        <ul className="flex w-full max-w-xl flex-wrap gap-4 md:gap-6">
          {expertise.map((skill) => (
            <li key={skill.id} className="skill-animate text-sm uppercase">
              [{skill.title} / {skill.id + 1}]
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
