"use client";

import { type Answer, type Result } from "@/libs/constants";
import { getDominantResult } from "@/libs/functions";
import logo from "#/assets/logo.svg";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
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
          <section className="p-10 w-full flex justify-between items-center">
            <section className="flex gap-6 items-center">
              <Image src={logo as StaticImport} alt="ACT IN" className="w-36" />
              <h4 className="text-black font-normal">{data.title}</h4>
            </section>
            <h5 className="text-seagreen font-normal">
              {result?.[getDominantResult?.(result)] && result[getDominantResult(result)] * 10}% соответствия
            </h5>
          </section>
          <section className="p-10 flex flex-col gap-4">
            <p className="text-lg">{data.description}</p>
          </section>
        </section>
      </article>
    </Fragment>
  );
}
