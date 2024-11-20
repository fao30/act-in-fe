"use client";

import { ICONS } from "@/libs/constants";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import logo from "#/assets/logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="lg:sticky bottom-0 w-full bg-barley">
      <div className="flex items-center md:flex-row flex-col gap-4 justify-center px-4 pt-4 pb-2">
        <Image src={logo} alt="" className="w-32 md:w-24" />
        <p className="max-w-[34rem] max-md:text-center">
          Проект выполнен при поддержке{" "}
          <strong>«Фонда содействия инновациям»</strong> в рамках федерального
          проекта «Платформа университетского технологического
          предпринимательства»
        </p>
      </div>
      <div className="text-lg text-donkey font-medium flex lg:flex-row flex-col justify-center items-center gap-2 md:gap-12 p-shorter lg:py-4">
        <p>ACT IN</p>
        <p>Мечты становятся реальностью!</p>
        <section className="flex gap-2 items-center">
          <section className="bg-white rounded-md size-6 relative">
            <Icon
              icon={ICONS.headset}
              className="text-tango absolute centered"
              width={18}
            />
          </section>
          <Link
            href="https://t.me/KIMAsupport"
            target="_blank"
            className="hover:underline"
          >
            Техническая поддержка
          </Link>
        </section>
        <section className="flex gap-2 items-center">
          <section className="bg-white rounded-md size-6 relative">
            <Icon
              icon={ICONS.call}
              className="text-tango absolute centered"
              width={18}
            />
          </section>
          <Link
            href="tel:+79625564290"
            target="_blank"
            className="hover:underline"
          >
            +7 (962) 556-42-90
          </Link>
        </section>
      </div>
    </footer>
  );
}
