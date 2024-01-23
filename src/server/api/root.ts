import { regionRouter } from "@/server/api/routers/region";
import { vacancyRouter } from "@/server/api/routers/vacancy";
import { createTRPCRouter } from "@/server/api/trpc";

export const appRouter = createTRPCRouter({ vacancy: vacancyRouter, region: regionRouter });

export type AppRouter = typeof appRouter;
