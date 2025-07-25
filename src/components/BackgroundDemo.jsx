"use client"
import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Contact } from "./Contact";


export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="relative flex items-center justify-center w-full flex-col px-4 py-5">
      <Contact />
    </BackgroundLines>
  );
}
