"use client";

import { RESULT_REDIRECT, type Answer } from "@/libs/constants";
import { getDominantResult } from "@/libs/functions";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import TransitionEffect from "../_components/TransitionEffect";

const SurveyContainer = dynamic(() => import("./components/SurveyContainer"), { ssr: false });

export default function SurveyPage() {
  const [result, setResult] = useState<Record<Answer, number> | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedResult = localStorage.getItem("result");
      if (storedResult) {
        setResult(JSON.parse(storedResult) as Record<Answer, number>);
      }
    }
  }, []);

  if (result) redirect(RESULT_REDIRECT[getDominantResult(result)]);

  return (
    <Fragment>
      <TransitionEffect />
      <SurveyContainer />
    </Fragment>
  );
}
