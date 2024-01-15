"use client";

import { QUESTIONS, SKILLS } from "@/libs/constants";
import { cn } from "@/libs/functions";
import { useMultiStepForm } from "@/libs/hooks/useMultiStepForm";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

export default function SurveyPage() {
  const [answers, setAnswers] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [isLastIndex, setIsLastIndex] = useState(false);

  const { currentStepIndex, step, isFirstStep, isLastStep, handleNext } = useMultiStepForm(
    QUESTIONS.map((question) => {
      return (
        <section key={question.question} className="flex flex-col h-full gap-10">
          <h6>{question.question}</h6>
          <section className="grid grid-cols-4 gap-6">
            {question.answers.map((e) => (
              <button
                type="button"
                onClick={() => {
                  if (isLastStep) {
                    setIsLastIndex(true);
                  } else handleNext();

                  const updatedAnswers = structuredClone(answers);
                  if (!updatedAnswers.includes(e)) updatedAnswers.push(e);
                  setAnswers(updatedAnswers);
                }}
                key={e}
                className="h-44 px-6 flex items-center justify-center text-white text-xl rounded-3xl bg-tango border-2 border-apricot"
              >
                <p className="font-bold text-balance text-center">{e}</p>
              </button>
            ))}
          </section>
        </section>
      );
    }),
  );

  return (
    <article className="bg-barley p-shorter flex flex-col gap-6 h-dvh">
      <h4 className="text-sand font-black pl-6">Прохождение опроса</h4>
      <section className="p-12 h-[80dvh] rounded-2xl bg-white border-2 border-wild flex flex-col gap-12">
        <section className="flex items-center justify-center">
          <h6>
            {isLastStep
              ? "Выбери все навыки, которыми ты владеешь. Не скромничай и смело выбирай свои сильные стороны!"
              : QUESTIONS.at(currentStepIndex)!.title}
          </h6>
        </section>
        <section className="w-full pl-10 pr-16 py-10 bg-wild rounded-full grid grid-cols-6 items-end">
          <h6 className="text-black">{isLastIndex ? "Почти готово!" : `${currentStepIndex + 1} / ${QUESTIONS.length}`}</h6>
          <section className="col-span-5 relative">
            <section
              style={{ width: isFirstStep ? "2%" : isLastIndex ? "100%" : (100 / QUESTIONS.length) * currentStepIndex + "%" }}
              className="animate absolute -translate-y-12 centered-left flex justify-end"
            >
              <Icon icon="fa6-solid:person" width={30} />
            </section>
            <p className="absolute -right-12 -translate-y-12 text-5xl">🏁</p>
            <div className="h-2 w-full bg-tango" />
          </section>
        </section>
        {isLastIndex ? (
          <section className="flex flex-col gap-12 items-center justify-center">
            <section className="flex justify-center gap-2 flex-wrap">
              {SKILLS.map((e) => {
                const active = skills.includes(e);
                return (
                  <button
                    onClick={() => {
                      if (!active) return setSkills([...skills, e]);
                      return setSkills(skills.filter((s) => s !== e));
                    }}
                    type="button"
                    className={cn("w-fit font-bold text-white bg-tango rounded-full text-center px-8 py-2 border-3 border-barley", {
                      "border-sand shadow-lg": active,
                    })}
                    key={e}
                  >
                    {e}
                  </button>
                );
              })}
            </section>
            <button
              className="shadow rounded-3xl bg-white border-3 border-tango font-bold text-sand px-6 py-2 w-fit text-lg"
              type="button"
              onClick={() => {
                alert(
                  JSON.stringify({
                    answers,
                    skills,
                  }),
                );
                console.log({
                  answers,
                  skills,
                });
              }}
            >
              Узнать свои результаты
            </button>
          </section>
        ) : (
          step
        )}
      </section>
    </article>
  );
}
