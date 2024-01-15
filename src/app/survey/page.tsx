import React from "react";

export default function page() {
  return (
    <article className="bg-barley p-shorter flex flex-col gap-6 h-dvh">
      <h4 className="text-sand font-black pl-6">Прохождение опроса</h4>
      <section className="p-12 h-[80dvh] rounded-2xl bg-white border-2 border-wild flex flex-col gap-12">
        <section className="flex items-center justify-center">
          <p className="text-2xl">
            Пройди опрос до конца, чтобы мы могли подобрать для тебя самый лучший вариант обучения в вузе и твоего профессионального
            развития!
          </p>
        </section>
        <section className="w-full py-12 bg-wild rounded-full"></section>
      </section>
    </article>
  );
}
