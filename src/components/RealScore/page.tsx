"use client";
import { useState } from "react";
import { versionList, scoreCategoryList, aiModels } from "@/mock-data";
import { ButtonBase } from "@mui/material";

export default function RealScore() {
  const [selectedVersion, setSelctedVersion] = useState(versionList[0].id);
  const [activeCategory, setActiveCategory] = useState(scoreCategoryList[1].id);
  return (
    <div className="my-20 max-w-300 m-auto px-20 py-10 bg-[#F6F4EE] rounded-4xl">
      <div className="flex justify-between items-center">
        <div className="font-extrabold text-3xl">REALG Score</div>
        <div className="flex gap-2 flex-col">
          <div className="gap-2 bg-white rounded-full p-1 flex w-fit self-end">
            {versionList.map((version) => (
              <ButtonBase
                key={version.id}
                sx={{
                  borderRadius: "9999px",
                  overflow: "hidden",
                }}
                onClick={() => setSelctedVersion(version.id)}
                component="button"
              >
                <span
                  className={`block rounded-full px-8 py-1 text-[#232F3E] font-sans text-sm hover:bg-black/5 transition ${
                    selectedVersion === version.id ? "bg-[#F6F4EE]" : ""
                  }`}
                >
                  {version.name}
                </span>
              </ButtonBase>
            ))}
          </div>
          <div className="gap-2 bg-white rounded-full p-1 flex">
            {scoreCategoryList.map((category) => (
              <ButtonBase
                key={category.id}
                component="button"
                sx={{
                  borderRadius: "9999px",
                  overflow: "hidden",
                }}
                onClick={() => setActiveCategory(category.id)}
              >
                <span
                  className={`block rounded-full px-8 py-1 text-[#232F3E] font-sans text-sm hover:bg-black/5 transition ${
                    activeCategory === category.id ? "bg-[#F6F4EE]" : ""
                  }`}
                >
                  {category.name}
                </span>
              </ButtonBase>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
