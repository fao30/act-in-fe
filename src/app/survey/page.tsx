"use client";

import { cn } from "@/libs/functions";
import logo from "#/assets/logo.svg";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";

const SurveyContainer = dynamic(() => import("./components/SurveyContainer"), { ssr: false });

export default function SurveyPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => setLoading(false), 1 * 1000);
    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <Fragment>
      <article
        className={cn("fixed bg-white top-0 w-full flex min-h-[100dvh] items-center justify-center z-50", { "hidden ": !loading })}
      >
        {loading ? (
          <section className="flex gap-8 items-center animate-pulse">
            <Image src={logo as StaticImport} alt="ACT IN" className="w-24 aspect-auto" />
            <h1 className="text-shaft font-bold">ACT IN</h1>
          </section>
        ) : null}
      </article>
      <SurveyContainer />
    </Fragment>
  );
}
