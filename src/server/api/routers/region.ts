import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { getData } from "./shared";

export type Area = { id: string; parent_id: null | string; name: string };

export const regionRouter = createTRPCRouter({
  list: publicProcedure.query(async () => {
    const data = await getData({ endpoint: "/areas/113" });
    return data as Area & { areas: (Area & { areas: Area[] })[] };
  }),
});
