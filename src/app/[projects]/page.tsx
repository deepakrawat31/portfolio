"use client";

import { projects } from "@/lib";
import { useGSAP } from "@gsap/react";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function ProjectHome() {
  let boxEl = useRef<HTMLElement | null>(null);
  const pathname = usePathname().slice(1);

  useGSAP(() => {
    let tl = gsap.timeline({
      defaults: { duration: 0.4, ease: "sine.inOut" },
    });

    tl.from(boxEl.current, {
      opacity: 0,
    })
      .from(".hr", {
        width: 0,
      })
      .from(".image-animate", { opacity: 0 })
      .from(".text-animate", {
        opacity: 0,
        y: -20,
        stagger: 0.2,
      })
      .from(".stack-animate", {
        opacity: 0,
        y: -20,
        stagger: 0.2,
      });
  }, []);

  return (
    <section className="relative isolate px-4" ref={boxEl}>
      <span className="border-surface-variant absolute inset-0 bottom-0 -z-10 border-b"></span>
      <div className="border-x-surface-variant flex min-h-dvh w-full max-w-6xl flex-col items-end gap-4 place-self-center border-x p-4 md:gap-6 md:p-6 2xl:max-w-7xl">
        {projects.map(
          (project) =>
            project.slug === pathname && (
              <div
                className="flex w-full flex-col gap-6 pt-24 md:gap-12"
                key={project.id}
              >
                <div className="flex items-center justify-between gap-4 md:gap-6">
                  <h2 className="text-animate flex flex-col items-baseline gap-4 uppercase md:flex-row md:gap-6">
                    <span>{project.title}</span>
                    <span className="text-xs opacity-40">
                      [{project.type} / {project.id + 1}]
                    </span>
                  </h2>
                  <Link
                    href={"/"}
                    className="border-surface-variant group text-animate relative isolate overflow-hidden rounded-full border p-3"
                  >
                    <ArrowLeftIcon
                      weight="bold"
                      className="size-4 transition-transform duration-400 group-hover:-translate-x-20"
                    />
                    <ArrowLeftIcon
                      weight="bold"
                      className="absolute bottom-3 size-4 translate-x-20 transition-transform duration-400 group-hover:translate-x-0"
                    />
                  </Link>
                </div>
                <hr className="text-surface-variant hr w-full" />
                <div className="flex flex-col gap-4 md:gap-6 lg:flex-row">
                  <ul className="flex flex-1 flex-col gap-4 md:gap-6">
                    <li className="text-animate text-base leading-relaxed text-pretty md:text-xl">
                      {project.description}
                    </li>
                    <hr className="text-surface-variant hr w-full" />
                    <li className="text-animate flex items-baseline justify-between gap-4 text-sm uppercase md:gap-6">
                      <span>client</span>
                      <span className="opacity-40">{project.client}</span>
                    </li>
                    <hr className="text-surface-variant hr w-full" />
                    <li className="text-animate flex items-baseline justify-between gap-4 text-sm uppercase md:gap-6">
                      <span>link</span>
                      <Link
                        href={project.link}
                        target="_blank"
                        className="text-end underline underline-offset-2 opacity-40"
                      >
                        {project.link}
                      </Link>
                    </li>
                    <hr className="text-surface-variant hr w-full" />
                    <li className="text-animate flex items-baseline justify-between gap-4 text-sm uppercase md:gap-6">
                      <span>date</span>
                      <span className="opacity-40">{project.date}</span>
                    </li>
                    <hr className="text-surface-variant hr w-full" />
                    <li className="text-animate flex items-baseline justify-between gap-4 text-sm uppercase md:gap-6">
                      <span>stack</span>
                      <ul className="flex flex-col items-end gap-4 opacity-40 md:gap-6">
                        {project.stack.map((item) => (
                          <li key={item.id} className="stack-animate">
                            [{item.title} / {item.id + 1}]
                          </li>
                        ))}
                      </ul>
                    </li>
                    <hr className="text-surface-variant hr w-full" />
                  </ul>
                  <div className="border-surface-variant image-animate flex min-h-[80dvh] w-full max-w-md flex-1 items-center justify-center place-self-center border">
                    <Image
                      width={400}
                      height={600}
                      alt={project.title}
                      src={project.img}
                      className="h-auto w-auto scale-90"
                      priority
                    ></Image>
                  </div>
                </div>
              </div>
            ),
        )}
      </div>
    </section>
  );
}
