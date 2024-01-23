import type { SearchParams } from "@/types/types";
import VacancyBody from "../../_components/VacancyBody";

type Props = { searchParams: SearchParams };

const topSkills = [
  "маркетинг",
  "SMM",
  "аналитическое мышление",
  "генерация идей",
  "креативность",
  "развитие бренда",
  "маркетинговый анализ",
  "копирайтинг",
  "проведение промо-акций",
  "анализ рынка",
];

export default function MarketingVacancyPage({ searchParams }: Props) {
  return (
    <VacancyBody
      path="marketing"
      searchParams={searchParams}
      text="Маркетолог"
      whom="маркетологу"
      title="Маркетолог"
      topSkills={topSkills}
    />
  );
}
