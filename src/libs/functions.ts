import { clsx, type ClassValue } from "clsx";
import { type ReadonlyURLSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { QUESTIONS, SKILLS, type Answer } from "./constants";

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;
  return `${pathname}${queryString}`;
};

export const generateSearchParams = (params: Record<string, string>) => {
  const searchParams = new URLSearchParams();
  for (const key of Object.keys(params)) {
    const value = params[key];
    if (value) searchParams.append(key, value.toString());
  }
  const paramsString = searchParams.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;
  return queryString;
};

export const calculateCounts = ({ answers, skills }: { answers: string[]; skills: string[] }): Record<Answer, number> => {
  const initialCounts: Record<Answer, number> = { BA: 0, M: 0 };

  const countSkill = skills.reduce(
    (counts, skill) => {
      const matchingSkill = SKILLS.find((s) => s.label === skill);
      if (matchingSkill) counts[matchingSkill.value] += 0.2;
      return counts;
    },
    { ...initialCounts },
  );

  const countAnswer = answers.reduce(
    (questionCounts, selectedAnswer) => {
      QUESTIONS.forEach((question) => {
        const matchingAnswer = question.answers.find((answer) => answer.label === selectedAnswer);
        if (matchingAnswer) questionCounts[matchingAnswer.value] += 1;
      });
      return questionCounts;
    },
    { ...initialCounts },
  );

  const totalCounts: Record<Answer, number> = { BA: countSkill.BA + countAnswer.BA, M: countSkill.M + countAnswer.M };

  const roundedCounts: Record<Answer, number> = totalCounts;
  for (const key in totalCounts) {
    roundedCounts[key as Answer] = parseFloat(totalCounts[key as Answer].toFixed(1));
  }

  return roundedCounts;
};

export const getDominantResult = (counts: Record<Answer, number>): "BA" | "M" => {
  if (counts.BA > counts.M) {
    return "BA";
  } else if (counts.M > counts.BA) {
    return "M";
  } else {
    // If counts are equal, you can decide what to return or handle it accordingly
    // For simplicity, I'll return "BA" in this case
    return "BA";
  }
};

const timestampInfo = `${new Date().toLocaleTimeString(undefined, {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
})} 👉`;

export const timestamp = { error: `❌ ${timestampInfo}`, success: `✅ ${timestampInfo}` };

export const getError = ({ error, url, plain, status }: { error: unknown; url: string; plain?: boolean; status: number }) => {
  const details = {
    error: `${timestamp.error} ERROR: `,
    url: `${timestamp.error} URL: `,
    status: `${timestamp.error} STATUS: `,
    session: `${timestamp.error} SESSION: `,
  };
  if (plain)
    return `\n${details.error}${typeof error === "string" ? error : JSON.stringify(error)}\n${details.url}${url}\n${
      details.status
    }${status}}`;
  console.error(details.error, error);
  console.error(details.url, url);
};

export const consoleError = (error: string) => console.error(`${timestamp.error} ${error}`);

export const formatCurrency = ({ amount, currency }: { amount: number; currency: string }) => {
  const formatter = Intl.NumberFormat(["ru-RU"], {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return formatter.format(amount);
};
