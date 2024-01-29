import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import logo from "#/assets/logo.svg";

export default function Home() {
  return (
    <article className="h-dvh flex flex-col justify-center items-center bg-apricot gap-32 px-shorter">
      <section className="flex flex-col gap-9 justify-center items-center text-center">
        <section className="flex gap-8 items-center">
          <Image src={logo as StaticImport} alt="ACT IN" className="w-24 aspect-auto" />
          <h1 className="text-shaft font-bold">ACT IN</h1>
        </section>
        <h4>Карьерный путь начинается здесь</h4>
        <p className="text-balance text-2xl xl:w-[50%]">
          Добро пожаловать в наш сервис, где мечты становятся реальностью!
          <br />
          Мы - ваш надежный компаньон в мире образования и карьеры. Здесь каждый школьник может найти свой идеальный путь обучения и
          построить будущее, о котором мечтал.
        </p>
      </section>
      <Link
        href="/survey"
        className="drop-shadow-lg relative w-44 h-14 flex items-center justify-center rounded-full from-white via-tango/20 to-tango bg-gradient-to-b"
      >
        <section className="bg-tango w-[10.8rem] h-[3.3rem] font-medium rounded-full text-2xl text-white flex items-center justify-center">
          Начать
        </section>
      </Link>
    </article>
  );
}
