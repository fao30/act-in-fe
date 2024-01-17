"use client";

import { Fragment } from "react";

type Props = { children: React.ReactNode };

export default function HigherOrderComponent({ children }: Props) {
  return <Fragment>{children}</Fragment>;
}
