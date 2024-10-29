"use client";

import Tippy from "@tippyjs/react";
import Image from "next/image";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

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

const ProjectLarge: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
  techniques,
  image,
  link,
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="flex flex-col md:flex-row items-center border border-neutral-200 rounded-3xl relative p-10 text-left hover-extend"
    >
      <div className="flex flex-col md:flex-row w-full md:gap-10 md:items-center max-h-full">
        <div className="md:w-1/2 flex justify-center p-4 ">
          <Image src={image} alt={title} width={550} height={300} />
        </div>

        <div className="md:w-1/2 flex flex-col gap-2  justify-center">
          <h4 className="text-2xl font-bold">{title}</h4>

          <div className="mb-4 max-w-96 text-justify">{children}</div>

          <div className="flex flex-wrap gap-4">
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

export default ProjectLarge;
