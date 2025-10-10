"use client";

import { useGSAP } from "@gsap/react";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { projects } from "../lib";

gsap.registerPlugin(ScrollTrigger);
export default function Projects() {
  let boxEl = useRef<HTMLElement | null>(null);
  let projectEl = useRef<HTMLUListElement | null>(null);

  useGSAP(() => {
    let tl = gsap.timeline({
      defaults: { duration: 0.4, ease: "sine.inOut" },
    });

    let projectTl = gsap.timeline({
      defaults: { duration: 0.4, ease: "sine.inOut" },
      scrollTrigger: {
        trigger: projectEl.current,
        start: "top 60%",
        end: "bottom center",
      },
    });

    tl.from(boxEl.current, {
      opacity: 0,
    });

    projectTl.from(projectEl.current, {
      y: -20,
      opacity: 0,
      stagger: 0.2,
    });
  }, []);

  return (
    <section className="relative isolate px-4" ref={boxEl}>
      <span className="border-surface-variant absolute inset-0 bottom-0 -z-10 border-b"></span>
      <div className="border-x-surface-variant min-h-[80dvh] w-full max-w-6xl place-self-center border-x p-4 md:p-6 2xl:max-w-7xl">
        <ul ref={projectEl} className="flex flex-wrap items-center gap-4">
          {projects.map((project) => (
            <li
              className="flex min-h-[80dvh] w-full max-w-sm flex-col gap-4"
              key={project.id}
            >
              <h4 className="flex items-baseline gap-4">
                <span className="text-base md:text-lg">{project.title}</span>
                <span className="text-xs uppercase opacity-40">
                  [{project.type} / 0{project.id + 1}]
                </span>
              </h4>
              <hr className="text-surface-variant" />
              <Link
                href={project.slug}
                className="group border-surface-variant relative isolate flex flex-1 items-center justify-center overflow-hidden border"
              >
                <Image
                  width={400}
                  height={600}
                  src={project.img}
                  alt={project.title}
                  className="absolute top-1/2 left-1/2 h-fit w-fit -translate-x-1/2 -translate-y-1/2 scale-60 transition-transform duration-400 group-hover:scale-65"
                />
                <span className="border-surface-variant bg-surface relative isolate scale-0 overflow-hidden rounded-full border p-3 opacity-0 transition-all duration-400 group-hover:scale-100 group-hover:opacity-100">
                  <ArrowRightIcon
                    weight="bold"
                    className="size-6 transition-transform delay-500 duration-400 group-hover:translate-x-20"
                  />
                  <ArrowRightIcon
                    weight="bold"
                    className="absolute bottom-3 size-6 -translate-x-20 transition-transform delay-500 duration-400 group-hover:translate-x-0"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
