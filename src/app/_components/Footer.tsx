"use client";

import { ICONS } from "@/libs/constants";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-barley text-lg text-donkey font-medium lg:sticky bottom-0 w-full flex md:flex-row flex-col justify-center items-center gap-2 md:gap-12 pb-shorter px-shorter">
      <p>ACT IN</p>
      <p>Мечты становятся реальностью!</p>
      <section className="flex gap-2 items-center">
        <section className="bg-white rounded-md size-6 relative">
          <Icon icon={ICONS.headset} className="text-tango absolute centered" width={18} />
        </section>
        <Link href="/" className="hover:underline">
          Техническая поддержка
        </Link>
      </section>
      <section className="flex gap-2 items-center">
        <section className="bg-white rounded-md size-6 relative">
          <Icon icon={ICONS.call} className="text-tango absolute centered" width={18} />
        </section>
        <Link href="tel:+79625564290" className="hover:underline">
          +7 (962) 556 - 42 - 90
        </Link>
      </section>
    </footer>
  );
}
