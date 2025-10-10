"use client";

import { usePathname } from "next/navigation";

export default function ProjectHome() {
  const pathname = usePathname();

  return (
    <section className="relative isolate px-4">
      <span className="border-surface-variant absolute inset-0 bottom-0 -z-10 border-b"></span>
      <div className="border-x-surface-variant flex min-h-dvh w-full max-w-6xl flex-col items-end justify-end gap-4 place-self-center border-x p-4 md:gap-6 md:p-6 2xl:max-w-7xl">
        {pathname}
      </div>
    </section>
  );
}
