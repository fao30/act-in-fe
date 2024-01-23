"use client";

import { formatCurrency, generateSearchParams } from "@/libs/functions";
import { type Area } from "@/server/api/routers/region";
import { api } from "@/trpc/react";
import type { SearchParams } from "@/types/types";
import suitcase from "#/assets/icons/suitcase.png";
import { Select, Skeleton } from "antd";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = { text: string; title: string; topSkills: string[]; searchParams: SearchParams; whom: string; path: string };

export default function VacancyBody({ text, title, topSkills, searchParams, whom, path }: Props) {
  const router = useRouter();

  const [selectedAreas, setSelectedAreas] = useState({ region: searchParams.region ?? "", city: searchParams.city ?? "" });

  const { data: vacancies, isLoading: loadingVacancies } = api.vacancy.list.useQuery({
    text,
    area: [searchParams.region ?? "", searchParams.city ?? ""],
  });
  const { data: statistics, isLoading: loadingStatistics } = api.vacancy.statistic.useQuery({ text });
  const { data: regions } = api.region.list.useQuery();
  const [cities, setCities] = useState<(Area & { areas: Area[] }) | null>(null);

  useEffect(() => {
    if (regions && searchParams.region) {
      setCities(regions?.areas?.find((area) => area.id === searchParams.region) ?? null);
    }
  }, [regions, searchParams.region]);

  return (
    <article className="min-h-[100dvh] p-shorter bg-barley flex flex-col gap-4 lg:gap-6">
      <section className="px-4 xl:px-10 rounded-2xl bg-white border-2 border-wild flex flex-col divide-y-2 divide-wafer divide-dashed">
        <section className="p-4 lg:p-10 flex gap-4 items-center">
          <Image className="w-16" src={suitcase as StaticImport} alt="Бизнес аналитик" />
          <h5 className="font-normal">{title}</h5>
        </section>
        <section className="p-4 lg:p-10 flex flex-col gap-2">
          {loadingStatistics ? (
            <Skeleton active />
          ) : (
            <section className="lg:px-6 lg:py-6">
              <h6 className="font-normal">Статистика вакансий</h6>
              <section className="flex flex-col">
                {statistics?.map((e) => (
                  <section key={e.label}>
                    <span className="text-sm text-tango lg:text-xl font-bold">{e.totalVacancies.toLocaleString(["ru-RU"])} </span>
                    <span className="text-sm lg:text-lg">вакансий по запросу “{title}” </span>
                    <span className="text-sm lg:text-xl text-tango">{e.label}</span>
                  </section>
                ))}
              </section>
            </section>
          )}
        </section>
        <section className="p-4 lg:p-10">
          {loadingStatistics ? (
            <Skeleton active />
          ) : (
            <section className="flex flex-col gap-4">
              <h6 className="text-center">ТОП-10 навыков, необходимых {whom}, согласно сервису HeadHunter.ru</h6>
              <section className="flex lg:justify-center gap-2 flex-wrap">
                {topSkills.map((skill) => {
                  return (
                    <section
                      className="w-fit font-bold text-white bg-tango rounded-full text-center px-3 lg:px-8 py-1 lg:py-2 border-3 border-barley lg:text-base text-sm"
                      key={skill}
                    >
                      {skill}
                    </section>
                  );
                })}
              </section>
            </section>
          )}
        </section>

        <section className="p-4 lg:p-10 flex flex-col gap-4 lg:gap-6">
          {regions ?? cities ? (
            <section className="flex gap-4 flex-wrap justify-end items-center">
              <Select
                loading={loadingVacancies}
                filterOption={(input, option) =>
                  Object.values(option as object)
                    .join(" ")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                showSearch
                placeholder="Регион"
                value={selectedAreas.region || undefined}
                onChange={(e) => {
                  setSelectedAreas({ region: e, city: "" });
                  setCities(regions?.areas?.find((area) => area.id === e) ?? null);
                }}
                options={regions?.areas.map((e) => ({ label: e.name, value: e.id }))}
                className="w-96 text-lg"
              />
              <Select
                loading={loadingVacancies}
                filterOption={(input, option) =>
                  Object.values(option as object)
                    .join(" ")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                showSearch
                placeholder="Город"
                value={selectedAreas.city || undefined}
                onChange={(e) => setSelectedAreas({ ...selectedAreas, city: e })}
                options={cities?.areas?.map((e) => ({ label: e.name, value: e.id }))}
                className="w-96 text-lg"
              />
              <button
                onClick={() => router.push(`/result/${path}/vacancy${generateSearchParams(selectedAreas)}`)}
                type="button"
                className="btn"
              >
                Найти
              </button>
            </section>
          ) : null}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
            {loadingVacancies
              ? Array(6)
                  .fill(6)
                  .map((_, i) => <Skeleton avatar key={i} active />)
              : vacancies?.items.map((e) => (
                  <section key={e.id} className="px-6 py-3 flex flex-col gap-4 border-2 border-tango rounded-2xl">
                    <section className="flex flex-col">
                      <h6>{e.name}</h6>

                      <h5>
                        {e.salary.from
                          ? `${!e.salary.to ? "от" : ""} ${formatCurrency({ amount: e.salary.from, currency: e.salary.currency })}`
                          : ""}
                        {e.salary.to
                          ? `${e.salary.from ? " - " : " до "} ${formatCurrency({ amount: e.salary.to, currency: e.salary.currency })}`
                          : ""}
                      </h5>
                    </section>
                    <section className="flex gap-2 items-center">
                      <Image width={50} height={50} src={e.employer?.logo_urls?.original} alt={e?.employer?.name} />
                      <p className="text-lg">{e.employer.name}</p>
                    </section>
                    <section className="flex gap-2 flex-wrap">
                      {e.key_skills?.map((skill) => {
                        return (
                          <section
                            className="w-fit font-bold text-white bg-tango rounded-full text-center px-3 py-1 border-3 border-barley text-sm lg:text-base"
                            key={skill.name}
                          >
                            {skill.name}
                          </section>
                        );
                      })}
                    </section>
                  </section>
                ))}
          </section>
        </section>
      </section>
    </article>
  );
}
