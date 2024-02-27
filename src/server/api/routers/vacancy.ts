import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import type { RouterOutputs } from "@/trpc/shared";
import { z } from "zod";
import { getData } from "./shared";

export const vacancyRouter = createTRPCRouter({
  statistic: publicProcedure.input(z.object({ text: z.string() })).query(async ({ input }) => {
    const russia = (await getData({ endpoint: "/vacancies", params: { area: "113", text: input.text } })) as Root;
    const kazan = (await getData({ endpoint: "/vacancies", params: { area: "88", text: input.text } })) as Root;
    const moscow = (await getData({ endpoint: "/vacancies", params: { area: "1", text: input.text } })) as Root;
    return [
      { label: "на территории России", totalVacancies: russia.found },
      { label: "в Москве", totalVacancies: moscow.found },
      { label: "в Казани", totalVacancies: kazan.found },
    ];
  }),

  keyword: publicProcedure.input(z.object({ text: z.string() })).query(async ({ input }) => {
    const data = await getData({ endpoint: "/suggests/skill_set", params: input });
    return data;
  }),

  detail: publicProcedure.input(z.object({ id: z.string() })).query(async ({ input }) => {
    const data = await getData({ endpoint: `/vacancies/${input.id}` });
    return data as { key_skills: { name: string }[] };
  }),

  list: publicProcedure
    .input(
      z.object({
        page: z.coerce.number().default(0),
        per_page: z.coerce.number().default(6),
        text: z.string(),
        only_with_salary: z.coerce.boolean().default(true),
        area: z.array(z.string()).optional(),
        currency: z.string().default("RUR"),
      }),
    )
    .query(async ({ input }) => {
      const data = (await getData({ endpoint: "/vacancies", params: input })) as Root;
      const topSkillsSet = new Set<string>();

      for (const item of data.items) {
        const dataById = (await getData({ endpoint: `/vacancies/${item.id}` })) as { key_skills: { name: string }[] };
        item.key_skills = dataById.key_skills.slice(0, 5);
        // biome-ignore lint/complexity/noForEach: <explanation>
        dataById.key_skills.forEach((e) => topSkillsSet.add(e.name));
      }

      return { ...data, topSkills: Array.from(topSkillsSet).slice(0, 10) };
    }),
});

// outputs
export type VacancyList = RouterOutputs["vacancy"]["list"];

interface Root {
  items: Item[];
  found: number;
  pages: number;
  page: number;
  per_page: number;
  alternate_url: string;
}

interface Item {
  key_skills: { name: string }[];
  id: string;
  premium: boolean;
  name: string;
  department?: Department;
  has_test: boolean;
  response_letter_required: boolean;
  area: Area;
  salary: {
    currency: string;
    from: number | null;
    gross: boolean;
    to: number | null;
  };

  type: Type;
  address?: Address;

  published_at: string;
  created_at: string;
  archived: boolean;
  apply_alternate_url: string;
  show_logo_in_search?: boolean;

  url: string;
  alternate_url: string;

  employer: Employer;
  snippet: Snippet;
  contacts?: Contacts;
  schedule: Schedule;

  accept_temporary: boolean;
  professional_roles: ProfessionalRole[];
  accept_incomplete_resumes: boolean;
  experience: Experience;
  employment: Employment;

  is_adv_vacancy: boolean;

  branding?: Branding;
}

interface Department {
  id: string;
  name: string;
}

interface Area {
  id: string;
  name: string;
  url: string;
}

interface Type {
  id: string;
  name: string;
}

interface Address {
  city: string;
  street: string;
  building: string;
  lat: number;
  lng: number;

  raw: string;
  metro?: Metro;
  metro_stations: MetroStation[];
  id: string;
}

interface Metro {
  station_name: string;
  line_name: string;
  station_id: string;
  line_id: string;
  lat: number;
  lng: number;
}

interface MetroStation {
  station_name: string;
  line_name: string;
  station_id: string;
  line_id: string;
  lat: number;
  lng: number;
}

interface Employer {
  id: string;
  name: string;
  url: string;
  alternate_url: string;
  logo_urls: LogoUrls;
  vacancies_url: string;
  accredited_it_employer: boolean;
  trusted: boolean;
}

interface LogoUrls {
  "90": string;
  "240": string;
  original: string;
}

interface Snippet {
  requirement: string;
  responsibility: string;
}

interface Contacts {
  name: string;
  email: string;
  phones: Phone[];
}

interface Phone {
  comment: string;
  city: string;
  number: string;
  country: string;
  formatted: string;
}

interface Schedule {
  id: string;
  name: string;
}

interface ProfessionalRole {
  id: string;
  name: string;
}

interface Experience {
  id: string;
  name: string;
}

interface Employment {
  id: string;
  name: string;
}

interface Branding {
  type: string;
}
