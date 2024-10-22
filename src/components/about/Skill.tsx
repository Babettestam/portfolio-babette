"use client";

import { Skill as SkillType } from "@/types";
import Image from "next/image";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

interface Props {
  skill: SkillType;
}

export default function Skill({ skill: { logo, name, years } }: Props) {
  return (
    <Tippy content={name}>
      <div className="flex gap-2">
        <div className="bg-lightBackground w-[70px] h-[70px] md:w-[90px] md:h-[90px] p-5 flex justify-center items-center rounded-md">
          <Image
            src={`logos/${logo}`}
            alt={`${name} logo`}
            width={70}
            height={70}
          />
        </div>
        <div className="flex flex-col gap-2 items-center justify-center w-20">
          <h5 className="font-bold text-lg">{years} years</h5>
          <div className="flex flex-wrap gap-1 max-w-[45px]">
            {[...Array(years)].map((_, index) => (
              <div className="bg-primary w-2 h-2 rounded-full" key={index} />
            ))}
          </div>
        </div>
      </div>
    </Tippy>
  );
}
