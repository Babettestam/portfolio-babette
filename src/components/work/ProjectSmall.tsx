"use client";

import Tippy from "@tippyjs/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Technique {
  logo: string; // URL or component for logo
  name: string;
}

interface Props {
  title: string;
  techniques: Technique[];
  image: string; // URL of the image
  link: string;
}

const ProjectSmall: React.FC<Props> = ({ title, techniques, image, link }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className={`flex flex-col w-full items-center text-center rounded-3xl relative p-10 border border-neutral-200 hover-extend`}
    >
      <div className="flex flex-col justify-between h-full w-full max-h-full">
        <h4 className="text-2xl font-bold">{title}</h4>
        <div className="flex justify-center p-4 ">
          <Image src={image} alt={title} width={500} height={275} />
        </div>

        <div className="flex flex-col gap-2 justify-center">
          <div className="flex flex-wrap justify-center gap-4">
            {techniques.map((tech, index) => (
              <div key={index} className="flex items-center gap-2">
                <Tippy content={tech.name}>
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={55}
                    height={55}
                  />
                </Tippy>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectSmall;
