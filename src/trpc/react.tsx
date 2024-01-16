"use client";

import { type AppRouter } from "@/server/api/root";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { unstable_httpBatchStreamLink as httpBatchStreamLink, loggerLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import { useState } from "react";
import { getUrl, transformer } from "./shared";

const theme = extendTheme({ fonts: { body: "var(--font-manrope)" } });

export const api = createTRPCReact<AppRouter>();

type Props = { children: React.ReactNode; cookies: string };

export function TRPCReactProvider({ children, cookies }: Props) {
  const [queryClient] = useState(() => new QueryClient());

  const [trpcClient] = useState(() =>
    api.createClient({
      transformer,
      links: [
        loggerLink({
          enabled: (op) => process.env.NODE_ENV === "development" || (op.direction === "down" && op.result instanceof Error),
        }),
        httpBatchStreamLink({
          url: getUrl(),
          headers: () => ({ cookie: cookies, "x-trpc-source": "react" }),
        }),
      ],
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        <ChakraProvider toastOptions={{ defaultOptions: { duration: 4000, position: "top" } }} theme={theme}>
          <ReactQueryDevtools initialIsOpen={false} />
          {children}
        </ChakraProvider>
      </api.Provider>
    </QueryClientProvider>
  );
}
