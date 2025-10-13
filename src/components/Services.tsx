"use client";

import { services } from "@/lib";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function Services() {
  let boxEl = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    let tl = gsap.timeline({
      defaults: { duration: 0.4, ease: "sine.inOut" },
    });

    let textTl = gsap.timeline({
      defaults: { duration: 0.4, ease: "sine.inOut" },
      scrollTrigger: {
        trigger: ".text-animate",
        start: "top center",
        end: "bottom center",
      },
    });

    let serviceTl = gsap.timeline({
      defaults: { duration: 0.4, ease: "sine.inOut" },
      scrollTrigger: {
        trigger: ".service-animate",
        start: "top center",
        end: "bottom center",
      },
    });

    tl.from(boxEl.current, {
      opacity: 0,
    });

    textTl.from(".text-animate", {
      y: -20,
      opacity: 0,
      stagger: {
        each: 0.2,
        ease: "sine.inOut",
        from: "start",
      },
    });

    serviceTl.from(".service-animate", {
      y: -20,
      opacity: 0,
      stagger: {
        each: 0.2,
        ease: "sine.inOut",
        from: "start",
      },
    });
  });

  return (
    <section className="relative isolate px-4" ref={boxEl}>
      <span className="border-surface-variant absolute inset-0 bottom-0 -z-10 border-b"></span>
      <div className="border-x-surface-variant min-h-[80dvh] w-full max-w-6xl items-center justify-between gap-4 place-self-center border-x p-4 md:gap-6 md:p-6 2xl:max-w-7xl">
        <div className="flex flex-col gap-4">
          <h4 className="text-animate w-full max-w-xl text-xl leading-relaxed text-pretty md:text-2xl">
            Deepak - Frontend Developer with hands on experience. I've developed
            multiple websites, freelanced on client projects. Ready to create
            impactful experience while growing my skills.
          </h4>
          <p className="text-animate w-full max-w-xl leading-relaxed text-pretty opacity-40">
            Eager to grow and refine my skills by taking on new challenges, from
            small to larger projects - I have knowledge in the following
            categories below.
          </p>
          <ul className="flex flex-col gap-4 md:gap-6">
            {services.map((service) => (
              <li
                className="service-animate flex w-full max-w-xl flex-col gap-4 md:gap-6"
                key={service.id}
              >
                <hr className="text-surface-variant" />
                <span className="uppercase">{service.title}</span>
                <span>[0{service.id + 1}]</span>
                <p className="leading-relaxed text-pretty opacity-40">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
