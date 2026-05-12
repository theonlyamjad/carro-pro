"use client";

import { ReactNode } from "react";

export default function TransitionProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="opacity-100 transition-opacity duration-500">
      {children}
    </div>
  );
}