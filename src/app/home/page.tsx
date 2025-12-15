import React from "react";
import Header from "@/components/Header";
import RealHero from "@/components/RealHero";
import RealScore from "@/components/RealScore/page";
export default function Home() {
  return (
    <main>
      <Header />
      <div className="pt-28" />
      <RealHero />
      <RealScore />
    </main>
  );
}
