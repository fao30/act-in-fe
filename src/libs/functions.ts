import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { QUESTIONS, SKILLS, type Answer } from "./constants";

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

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
