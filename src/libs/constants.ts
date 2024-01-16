export const ICONS = {
  headset: "wpf:headset",
  call: "material-symbols:call",
};

export type Answer = "BA" | "M";

export const SKILLS: { label: string; value: Answer }[] = [
  { label: "креативность", value: "M" },
  { label: "маркетинг", value: "M" },
  { label: "бизнес-аналитика", value: "BA" },
  { label: "лидерство", value: "M" },
  { label: "проектная деятельность", value: "BA" },
  { label: "аналитическое мышление", value: "BA" },
  { label: "создание презентаций", value: "M" },
  { label: "генерация идей", value: "M" },
  { label: "анализ рынка", value: "BA" },
  { label: "анализ конкурентов", value: "M" },
  { label: "законодательство", value: "M" },
  { label: "Python", value: "BA" },
  { label: "анализ данных", value: "BA" },
  { label: "Excel", value: "BA" },
  { label: "большие данные", value: "BA" },
  { label: "проведение опроса", value: "M" },
  { label: "PowerPoint", value: "M" },
  { label: "алгоритмы", value: "BA" },
  { label: "высшая математика", value: "BA" },
  { label: "графический дизайн", value: "M" },
];

export const QUESTIONS: { title: string; question: string; answers: { label: string; value: Answer }[] }[] = [
  {
    title:
      "Пройди опрос до конца, чтобы мы могли подобрать для тебя самый лучший вариант обучения в вузе и твоего профессионального развития!",
    question: "Давай начнем! О чем тебе интереснее беседовать?",
    answers: [
      { label: "о человеческих взаимоотношениях", value: "M" },
      { label: "о технических характеристиках новой модели машины, компьютера и т.д.", value: "BA" },
      { label: "об анализе крупных исторических событий", value: "BA" },
      { label: "о рекламных роликах компаний", value: "M" },
    ],
  },
  {
    title: "",
    question: "Вспомни свои школьные будни. Какой предмет у тебя вызывает наибольший интерес?",
    answers: [
      { label: "информатика", value: "BA" },
      { label: "математика", value: "BA" },
      { label: "обществознание", value: "M" },
      { label: "изобразительное искусство", value: "M" },
    ],
  },
  {
    title: "",
    question:
      "Вы с друзьями планируете киновечер и тебе поручили выбрать фильм. На что ты скорее всего обратишь внимание при выборе фильма?",
    answers: [
      { label: "маркетинговая кампания фильма", value: "M" },
      { label: "трейлер фильма", value: "BA" },
      { label: "наличие спецэффектов и применение современных IT-технологий", value: "BA" },
      { label: "рейтинг и отзывы", value: "M" },
    ],
  },
  {
    title: "",
    question: "Что тебя интересует в поездках в другие города/страны?",
    answers: [
      { label: "расширение кругозора", value: "M" },
      { label: "деловое общение", value: "BA" },
      { label: "устройство экономики другого города/страны", value: "BA" },
      { label: "отличия в поведении местных жителей от жителей родной местности", value: "M" },
    ],
  },
  {
    title: "Ты отлично справляешься! Почти половина пути уже пройдена, осталось совсем немного!",
    question: "Тебе необходимо организовать праздник. Какую задачу возьмешь на себя?",
    answers: [
      { label: "проанализирую цены в продуктовых магазинах и выберу самые выгодные варианты", value: "BA" },
      { label: "продумаю все развлечения", value: "M" },
      { label: "займусь оформлением пространства", value: "M" },
      { label: "соберу данные о всех гостях и их предпочтениях, систематизирую и составлю список покупок", value: "BA" },
    ],
  },
  {
    title: "",
    question: "Ой! Ты сделал ошибку, пока выполнял задание. Твои действия?",
    answers: [
      { label: "начну все заново", value: "BA" },
      { label: "придумаю оригинальный вариант исправления ошибки", value: "M" },
      { label: "вернусь к ошибке, найду  корень проблемы и постараюсь ее разрешить", value: "BA" },
      { label: "буду прогнозировать новый сценарий развития событий", value: "M" },
    ],
  },
  {
    title: "",
    question: "В стрессовой ситуации ты умеешь быстро...",
    answers: [
      { label: "разрабатывать алгоритмы действий", value: "BA" },
      { label: "собирать и систематизировать информацию", value: "BA" },
      { label: "визуализировать идеи", value: "M" },
      { label: "грамотно формулировать мысли", value: "M" },
    ],
  },
  {
    title: "Финальный рывок!",
    question: "О, ты наткнулся на интересный новостной сайт! Какую новость ты откроешь?",
    answers: [
      { label: "запуск нового необычного сервиса", value: "M" },
      { label: "применение искусственного интеллекта в бизнесе", value: "BA" },
      { label: "ребрендинг одного из крупнейших в России магазинов", value: "M" },
      { label: "популярность нового языка программирования", value: "BA" },
    ],
  },
  {
    title: "",
    question: "Какой навык ты хочешь приобрести?",
    answers: [
      { label: "писать  код", value: "BA" },
      { label: "стратегически мыслить", value: "M" },
      { label: "визуализировать статистические данные", value: "BA" },
      { label: "эффективно коммуницировать с людьми", value: "M" },
    ],
  },
];

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
