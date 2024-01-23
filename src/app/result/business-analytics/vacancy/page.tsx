import type { SearchParams } from "@/types/types";
import VacancyBody from "../../_components/VacancyBody";

type Props = { searchParams: SearchParams };

const topSkills = [
  "работа в команде",
  "управление проектами",
  "Excel",
  "PowerPoint",
  "написание ТЗ",
  "анализ рынка",
  "аналитическое мышление",
  "бизнес-процессы",
  "SQL",
  "Agile",
];

export default function BusinessAnalyticsVacancyPage({ searchParams }: Props) {
  return (
    <VacancyBody
      path="business-analytics"
      searchParams={searchParams}
      text="Бизнес анатлитик"
      whom="бизнес-аналитику"
      title="Бизнес-аналитик"
      topSkills={topSkills}
    />
  );
}
