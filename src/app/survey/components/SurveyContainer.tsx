"use client";

import { QUESTIONS, RESULT_REDIRECT, SKILLS, type Answer } from "@/libs/constants";
import { calculateCounts, cn, getDominantResult } from "@/libs/functions";
import { useMultiStepForm } from "@/libs/hooks/useMultiStepForm";
import { useToast } from "@chakra-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

export default function SurveyPage() {
  const router = useRouter();
  const toast = useToast();
  const [answers, setAnswers] = useLocalStorage<string[]>("answers", []);
  const [skills, setSkills] = useLocalStorage<string[]>("skills", []);
  const [isLastIndex, setIsLastIndex] = useLocalStorage("isLastIndex", false);
  const [result, setResult] = useLocalStorage<Record<Answer, number> | null>("result", null);

  const { currentStepIndex, step, isFirstStep, isLastStep, handleNext } = useMultiStepForm(
    QUESTIONS.map((question) => {
      return (
        <section key={question.question} className="flex flex-col h-full gap-10">
          <h6>{question.question}</h6>
          <section className="grid lg:grid-cols-4 gap-6">
            {question.answers.map((e) => (
              <button
                type="button"
                onClick={() => {
                  if (isLastStep) {
                    setIsLastIndex(true);
                  } else handleNext();

                  const updatedAnswers = structuredClone(answers);
                  if (!updatedAnswers.includes(e.label)) updatedAnswers.push(e.label);
                  setAnswers(updatedAnswers);
                }}
                key={e.label}
                className="h-24 lg:h-44 px-6 flex items-center justify-center text-white lg:text-xl rounded-3xl bg-tango border-2 border-apricot"
              >
                <p className="font-bold text-balance text-center">{e.label}</p>
              </button>
            ))}
          </section>
        </section>
      );
    }),
  );

  return (
    <Fragment>
      <article className="bg-barley p-shorter flex flex-col gap-4 lg:gap-6">
        <h4 className="text-sand font-black pl-6">Прохождение опроса</h4>
        <section className="p-4 xl:p-12 min-h-[80dvh] rounded-2xl bg-white border-2 border-wild flex flex-col gap-6 lg:gap-12 items-center">
          <section className="flex items-center justify-center">
            <h6>
              {isLastStep
                ? "Выбери все навыки, которыми ты владеешь. Не скромничай и смело выбирай свои сильные стороны!"
                : QUESTIONS.at(currentStepIndex)!.title}
            </h6>
          </section>
          <section className="w-fit lg:w-full lg:pl-10 lg:pr-16 lg:py-10 p-6 bg-wild rounded-full grid lg:grid-cols-6 items-end">
            <h6 className="text-black font-bold">{isLastIndex ? "Почти готово!" : `${currentStepIndex + 1} / ${QUESTIONS.length}`}</h6>
            <section className="lg:col-span-5 relative lg:flex hidden">
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
                  const active = skills.includes(e.label);
                  return (
                    <button
                      onClick={() => {
                        if (active) return setSkills(skills.filter((s) => s !== e.label));
                        if (!active) {
                          if (skills.length === 5) return toast({ status: "error", title: "Можно выбрать маскимум 5 навыков" });
                          return setSkills([...skills, e.label]);
                        }
                      }}
                      type="button"
                      className={cn(
                        "w-fit font-bold text-white bg-tango rounded-full text-center px-4 lg:px-8 py-2 border-3 border-barley lg:text-base text-sm",
                        {
                          "border-sand shadow-lg": active,
                        },
                      )}
                      key={e.label}
                    >
                      {e.label}
                    </button>
                  );
                })}
              </section>
              <button
                className="btn"
                type="button"
                onClick={() => {
                  if (!skills.length) return toast({ status: "warning", title: "Выбери 1 до 5 навыков!" });
                  setResult(calculateCounts({ answers, skills }));
                  router.push(RESULT_REDIRECT[getDominantResult(calculateCounts({ answers, skills }))]);
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
    </Fragment>
  );
}
