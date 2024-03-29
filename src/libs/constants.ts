export const ICONS = {
  headset: "wpf:headset",
  call: "material-symbols:call",
};

export type Answer = "BA" | "M";

export const RESULT_REDIRECT: Record<Answer, string> = {
  BA: "/result/business-analytics",
  M: "/result/marketing",
};

export type EducationalProgram = {
  title: string;
  major: string;
  universityName: string;
  about: string;
  programTitle: string;
  programs: string[];
  programWebsite: string;
  presentationWebsite: string;
  educationalCreditTitle: string;
  educationalCreditWebsite: string;
  information: {
    common: string[];
    entranceTest: string;
    educationForm: string;
    educationDuration: string;
    educationTuition: string;
    passingScorePaid: number;
    budgetQuota: number;
    passingScoreBudget: number;
  };
};

export type Result = {
  educationalProgramHref: string;
  title: string;
  description: string;
  skills: string[];
  skillTitle: string;
  additional: { monthlySalary: string; experiencedSalary: string; strongSide: string };
};

export const RESULT_EDUCATIONAL_PROGRAMS: Record<Answer, EducationalProgram> = {
  BA: {
    title: "Бизнес-аналитика в управленческой деятельности",
    major: "38.03.02 “Менеджмент”",
    universityName: "Казанский (Приволжский) Федеральный университет",
    about:
      "Программа готовит высококвалифицированных бизнес-аналитиков в области делового анализа и информационно-аналитической поддержки принятия оперативных, тактических и стратегических управленческих решений компании.",
    programTitle: "Программа сочетает преимущества аналогичных зарубежных программ подготовки, включая:",
    programs: [
      "Business Intelligence в Национальном университете Сингапура;",
      "Business Intelligence - data analysis and reporting в Политехническом институте Канады;",
      "MBE Business Intelligence в Берлинском университете им. Штайнбайса.",
    ],
    educationalCreditTitle: "Образовательный кредит от Сбера под 3%",
    educationalCreditWebsite: "https://www.sberbank.com/ru/person/credits/money/credit_na_obrazovanie",
    programWebsite:
      "https://kpfu.ru/institutes/institut-upravleniya-ekonomiki-i-finansov/struktura/otdelenie-menedzhmenta/kafedra-innovacij-i-investicij",
    presentationWebsite: "https://kpfu.ru/portal/docs/F_57925047/BA_bak_16.02.2022._final_.pdf",
    information: {
      common: ["Государственный ВУЗ", "Есть общежитие", "Бюджетные места"],
      entranceTest: "ЕГЭ: русский, профильная математика, обществознание",
      educationForm: "очная (дневная)",
      educationDuration: "4 года",
      educationTuition: "170.000 рублей",
      passingScorePaid: 125,
      budgetQuota: 20,
      passingScoreBudget: 265,
    },
  },
  M: {
    title: "Маркетинг",
    major: "38.03.02 “Менеджмент”",
    universityName: "Казанский (Приволжский) Федеральный университет",
    about:
      "Используя в управлении современную концепцию маркетинга, компании  стремятся строить свою деятельность в соответствии с ее ключевым принципом: производить то, что продается, а не продавать то, что производится.",
    programTitle: "Систематический и научно-организованный маркетинг позволяет компаниям:",
    programs: [
      "тщательно и всесторонне изучать рынок;",
      "формировать и активно воздействовать на спрос;",
      "рационально и эффективно планировать товарный ассортимент;",
      "организовывать рекламу и мероприятия по стимулированию сбыта;",
      "проводить ценовую политику.",
    ],
    programWebsite:
      "https://kpfu.ru/institutes/institut-upravleniya-ekonomiki-i-finansov/struktura/otdelenie-menedzhmenta/kafedra-marketinga",
    presentationWebsite: "https://kpfu.ru/portal/docs/F_1915942414/Marketing.pdf",
    educationalCreditWebsite: "https://www.sberbank.com/ru/person/credits/money/credit_na_obrazovanie",
    educationalCreditTitle: "Образовательный кредит от Сбера под 3%",
    information: {
      common: ["Государственный ВУЗ", "Есть общежитие", "Бюджетные места"],
      entranceTest: "ЕГЭ: русский, профильная математика, обществознание",
      educationForm: "очная (дневная)",
      educationDuration: "4 года",
      educationTuition: "170.000 рублей",
      passingScorePaid: 125,
      budgetQuota: 20,
      passingScoreBudget: 265,
    },
  },
};

export const RESULTS: Record<Answer, Result> = {
  M: {
    educationalProgramHref: "/result/marketing/educational-program",
    title: "Маркетинг",
    description:
      "Какие крупные и известные компании ты знаешь? Удивительно, но многие из них стали таковыми благодаря грамотному маркетингу! Ты можешь узнать как понимать клиентов, как с ними правильно взаимодействовать и строить маркетинговые стратегии на образовательной программе, которую мы подобрали специально для тебя",
    additional: { monthlySalary: "40", experiencedSalary: "180", strongSide: "3" },
    skillTitle: "Навыки, необходимые маркетологу, согласно сервису HeadHunter.ru",
    skills: [
      "маркетинг",
      "СММ",
      "аналитическое мышление",
      "генерация идей",
      "креативность",
      "развитие бренда",
      "маркетинговый анализ",
      "копирайтинг",
      "проведение промо-акций",
    ],
  },
  BA: {
    educationalProgramHref: "/result/business-analytics/educational-program",
    title: "Бизнес-аналитика",
    description:
      "Какие крупные и известные компании ты знаешь? Ни одна крупная компания не обходится без бизнес-аналитика в своем штате. Бизнес-аналитики нужны практически в любой отрасли: банки, фармацевтика, IT, энергетика. Задача бизнес-аналитика — изучить, как и чем живет компания, и посоветовать, как решить ее проблемы",
    additional: { monthlySalary: "45", experiencedSalary: "200", strongSide: "4" },
    skillTitle: "Навыки, необходимые бизнес-аналитику, согласно сервису HeadHunter.ru",
    skills: [
      "работа в команде",
      "управление проектами",
      "Excel",
      "PowerPoint",
      "написание ТЗ",
      "анализ рынка",
      "аналитическое мышление",
      "бизнес-процессы",
      "SQL",
    ],
  },
};

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
