"use client";

import { type Answer, type Result } from "@/libs/constants";
import { getDominantResult } from "@/libs/functions";
import experiencedSalary from "#/assets/icons/experiencedSalary.png";
import monthlySalary from "#/assets/icons/monthlySalary.png";
import strongSide from "#/assets/icons/strongSide.png";
import logo from "#/assets/logo.svg";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

type Props = { data: Result };
export default function ResultBody({ data }: Props) {
  const [result, setResult] = useState<Record<Answer, number> | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedResult = localStorage.getItem("result");
      if (storedResult) {
        setResult(JSON.parse(storedResult) as Record<Answer, number>);
      }
    }
  }, []);

  return (
    <Fragment>
      <article className="p-shorter bg-barley flex flex-col gap-4 lg:gap-6">
        <h4 className="text-sand font-black pl-6">Результаты опроса</h4>
        <section className="px-4 xl:px-10 min-h-[80dvh] rounded-2xl bg-white border-2 border-wild flex flex-col divide-y-2 divide-wafer divide-dashed items-center">
          <section className="p-4 lg:p-10 w-full flex flex-wrap gap-4 justify-between items-center">
            <section className="flex gap-6 items-center">
              <Image src={logo as StaticImport} alt="ACT IN" className="w-24 lg:w-36" />
              <h4 className="text-black font-normal">{data.title}</h4>
            </section>
            <h5 className="text-seagreen font-normal">{result && result[getDominantResult(result)] * 10}% соответствия</h5>
          </section>
          <section className="p-4 lg:p-10 flex flex-col gap-4">
            <p className="md:text-lg">{data.description}</p>
            <section className="flex justify-end">
              <Link href={data.educationalProgramHref} className="btn">
                Узнать подробнее о подходящей образовательной программе
              </Link>
            </section>
          </section>
          <section className="p-4 lg:p-10 flex flex-col gap-3 w-full">
            <section className="flex gap-4 items-center">
              <Image className="size-8" src={monthlySalary} alt="ACT IN - начальная заработная плата" />
              <p className="md:text-lg">{data.additional.monthlySalary}к / месяц - начальная заработная плата</p>
            </section>

            <section className="flex gap-4 items-center">
              <Image className="size-8" src={experiencedSalary} alt="ACT IN - начальная заработная плата" />
              <p className="md:text-lg">{data.additional.experiencedSalary}к / месяц - заработная плата при опыте 3-6 лет</p>
            </section>
            <section className="flex gap-4 items-center">
              <Image className="size-8" src={strongSide} alt="ACT IN - начальная заработная плата" />
              <p className="md:text-lg">
                У тебя уже есть {data.additional.strongSide} сильные стороны, необходимые для достижения успеха в этой сфере!
              </p>
            </section>
          </section>
          <section className="p-4 lg:p-10 flex flex-col gap-4">
            <p className="md:text-lg">Навыки, необходимые маркетологу, согласно сервису HeadHunter.ru</p>
            <section className="flex justify-center gap-2 flex-wrap">
              {data.skills.map((skill) => {
                return (
                  <section
                    className="w-fit font-bold text-white bg-tango rounded-full text-center px-4 lg:px-8 py-2 border-3 border-barley lg:text-base text-sm"
                    key={skill}
                  >
                    {skill}
                  </section>
                );
              })}
            </section>
            <section className="flex justify-end">
              <Link href="" className="btn">
                Посмотреть реальные вакансии
              </Link>
            </section>
          </section>
        </section>
      </article>
    </Fragment>
  );
}
