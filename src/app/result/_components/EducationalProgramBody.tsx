import { type EducationalProgram } from "@/libs/constants";
import check from "#/assets/check.png";
import university from "#/assets/kfu.png";
import logo from "#/assets/logo.svg";
import sberbank from "#/assets/sberbank.png";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

type Props = { data: EducationalProgram };

export default function EducationalProgramBody({ data }: Props) {
  return (
    <Fragment>
      <article className="p-shorter bg-barley">
        <section className="p-4 lg:p-10 min-h-[100dvh] rounded-2xl bg-white border-2 border-wild flex flex-col gap-4 lg:gap-6">
          <section className="flex gap-6 items-center">
            <Image src={logo as StaticImport} alt="ACT IN" className="w-24 md:-translate-y-2" />
            <section className="flex flex-col">
              <h4 className="text-black font-normal">{data.title}</h4>
              <p className="md:text-lg">Направление: {data.major}</p>
            </section>
          </section>
          <section className="flex gap-6 items-center">
            <Image src={university as StaticImport} alt={`ACT IN - ${data.universityName}`} className="w-24" />
            <h5 className="text-black font-normal">{data.universityName}</h5>
          </section>
          <section className="lg:pl-12 flex flex-col gap-4 lg:gap-6">
            <section className="flex flex-col gap-2">
              <h6 className="md:ml-1">О программе</h6>
              <p className="md:text-lg">{data.about}</p>
            </section>
            <section className="flex flex-col gap-2">
              <h6 className="md:ml-1">{data.programTitle}</h6>
              <ul className="list-disc">
                {data.programs.map((program) => (
                  <li className="md:text-lg ml-4 md:ml-2" key={program}>
                    {program}
                  </li>
                ))}
              </ul>
            </section>
          </section>

          <section className="rounded-3xl bg-wild/20 border-2 border-wafer px-4 md:px-8 py-6 flex flex-col gap-4">
            <h6>Общая информация</h6>
            <section className="flex gap-2 md:gap-4 flex-wrap">
              {data.information.common.map((e) => (
                <section key={e} className="flex gap-2 items-center">
                  <Image src={check as StaticImport} alt={`ACT IN - ${e}`} className="w-6" />
                  <p>{e}</p>
                </section>
              ))}
            </section>
            <section className="grid md:grid-cols-2 gap-4">
              <section className="flex flex-col md:col-span-2">
                <h6>Вступительные испытания</h6>
                <p className="md:text-lg">{data.information.entranceTest}</p>
              </section>
              <section className="flex flex-col md:col-span-2">
                <h6>Форма обучения</h6>
                <p className="md:text-lg">{data.information.educationForm}</p>
              </section>
              <section className="flex flex-col md:col-span-2">
                <h6>Продолжительность обучения</h6>
                <p className="md:text-lg">{data.information.educationDuration}</p>
              </section>
              <section className="flex flex-col">
                <h6>Стоимость обучения</h6>
                <p className="md:text-lg">{data.information.educationTuition}</p>
              </section>
              <section className="flex flex-col">
                <h6>Количество бюджетных мест:</h6>
                <p className="md:text-lg">{data.information.budgetQuota}</p>
              </section>
              <section className="flex flex-col">
                <h6>Проходной балл для платной формы обучения:</h6>
                <p className="md:text-lg">{data.information.passingScorePaid}</p>
              </section>
              <section className="flex flex-col">
                <h6>Проходной балл для бюджета:</h6>
                <p className="md:text-lg">{data.information.passingScoreBudget}</p>
              </section>
            </section>
          </section>

          <section className="flex justify-between flex-wrap gap-4">
            <Link href={data.programWebsite} target="_blank" className="btn">
              Перейти на сайт программы
            </Link>
            <Link href={data.presentationWebsite} target="_blank" className="btn">
              Посмотреть презентацию программы
            </Link>
          </section>
          <section className="flex gap-4">
            <Image src={sberbank as StaticImport} alt={`ACT IN - ${data.educationalCreditTitle}`} className="size-12" />
            <section className="flex flex-col">
              <Link href={data.educationalCreditWebsite}>
                <h6 className="text-seagreen hover:underline">{data.educationalCreditTitle}</h6>
              </Link>
              <p className="text-[#706969]">Перейди по ссылке, чтобы посмотреть условия</p>
            </section>
          </section>
        </section>
      </article>
    </Fragment>
  );
}
