import { env } from "@/env";
import { getError, timestamp } from "@/libs/functions";
import { THROW_TRPC_ERROR, TRPC_ERROR_CODES } from "@/trpc/shared";

type Params = Record<string, string[] | string | number | boolean>;

const getUrl = (endpoint: string, params?: Params): string => {
  const newUrl = new URL(`${env.HH_API_URL}${endpoint}`);
  if (params) {
    for (const key of Object.keys(params)) {
      const value = params[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          if (item) newUrl.searchParams.append(key, item.toString());
        });
      } else if (value) {
        newUrl.searchParams.append(key, value.toString());
      }
    }
  }
  return newUrl.toString();
};

export const getData = async ({ endpoint, params, cacheType }: { endpoint: string; params?: Params; cacheType?: RequestCache }) => {
  let headers: HeadersInit | undefined = undefined;
  headers = { Authorization: `Bearer ${env.HH_API_TOKEN}` };//HH
  const url = getUrl(endpoint, params);
  const res = await fetch(url, { cache: cacheType ?? "no-store", headers });

  if (!res.ok) {
    return THROW_TRPC_ERROR(
      TRPC_ERROR_CODES[res.status] ?? "INTERNAL_SERVER_ERROR",
      getError({ plain: true, error: await res.json(), url, status: res.status }),
    );
  }

  console.log(`${timestamp.success} (${res.status} GET) ${url}`);
  return res.json() as unknown;
};

export const postData = async ({ endpoint, body }: { endpoint: string; body: unknown }) => {
  const headers: HeadersInit = { "Content-Type": "application/json" };
  headers.Authorization = `Bearer ${env.HH_API_TOKEN}`;
  const url = getUrl(endpoint);
  const res = await fetch(url, { method: "POST", headers, body: JSON.stringify(body) });

  if (!res.ok) {
    return THROW_TRPC_ERROR(
      TRPC_ERROR_CODES[res.status] ?? "INTERNAL_SERVER_ERROR",
      getError({ plain: true, error: await res.json(), url, status: res.status }),
    );
  }

  console.log(`${timestamp.success} (${res.status} POST) ${url}`);
  return res.json() as unknown;
};

export const postFormData = async ({ endpoint, formData }: { endpoint: string; formData: FormData }) => {
  const headers: HeadersInit = { "Content-Type": "multipart/form-data" };
  headers.Authorization = `Bearer ${env.HH_API_TOKEN}`;
  const url = getUrl(endpoint);
  const res = await fetch(url, { method: "POST", headers, body: formData });

  if (!res.ok) {
    return THROW_TRPC_ERROR(
      TRPC_ERROR_CODES[res.status] ?? "INTERNAL_SERVER_ERROR",
      getError({ plain: true, error: await res.json(), url, status: res.status }),
    );
  }

  console.log(`${timestamp.success} (${res.status} POST FORM DATA) ${url}`);
  return res.json() as unknown;
};

export const putData = async ({ endpoint, body }: { endpoint: string; body: unknown }) => {
  const headers: HeadersInit = { "Content-Type": "application/json" };
  headers.Authorization = `Bearer ${env.HH_API_TOKEN}`;
  const url = getUrl(endpoint);
  const res = await fetch(url, { method: "PUT", headers, body: JSON.stringify(body) });

  if (!res.ok) {
    return THROW_TRPC_ERROR(
      TRPC_ERROR_CODES[res.status] ?? "INTERNAL_SERVER_ERROR",
      getError({ plain: true, error: await res.json(), url, status: res.status }),
    );
  }

  console.log(`${timestamp.success} (${res.status} PUT) ${url}`);
  return res.json() as unknown;
};

export const patchData = async ({ endpoint, body }: { endpoint: string; body: unknown }) => {
  const headers: HeadersInit = { "Content-Type": "application/json" };
  headers.Authorization = `Bearer ${env.HH_API_TOKEN}`;
  const url = getUrl(endpoint);
  const res = await fetch(url, { method: "PATCH", headers, body: JSON.stringify(body) });

  if (!res.ok) {
    return THROW_TRPC_ERROR(
      TRPC_ERROR_CODES[res.status] ?? "INTERNAL_SERVER_ERROR",
      getError({ plain: true, error: await res.json(), url, status: res.status }),
    );
  }

  console.log(`${timestamp.success} (${res.status} PATCH) ${url}`);
  return res.json() as unknown;
};

export const deleteData = async ({ endpoint }: { endpoint: string }) => {
  let headers: HeadersInit | undefined = undefined;
  headers = { Authorization: `Bearer ${env.HH_API_TOKEN}` };
  const url = getUrl(endpoint);
  const res = await fetch(url, { method: "DELETE", headers });

  if (!res.ok) {
    return THROW_TRPC_ERROR(
      TRPC_ERROR_CODES[res.status] ?? "INTERNAL_SERVER_ERROR",
      getError({ plain: true, error: await res.json(), url, status: res.status }),
    );
  }

  console.log(`${timestamp.success} (${res.status} DELETE) ${url}`);
  return res.json() as unknown;
};
