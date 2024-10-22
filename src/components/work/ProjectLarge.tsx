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
  order: number;
  totalProjects: number;
  link: string;
}

const ProjectLarge: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
  techniques,
  image,
  order,
  totalProjects,
  link,
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="flex flex-col md:flex-row items-center bg-fade-blue rounded-3xl relative p-10 text-left hover-extend"
    >
      <div className="absolute right-6 top-5">
        <div className="flex flex-col items-center justify-center text-white ">
          <h2 className="text-4xl opacity-80">
            {order.toString().padStart(2, "0")}
          </h2>
          <h5 className="opacity-40 text-lg">
            / {totalProjects.toString().padStart(2, "0")}
          </h5>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full md:gap-10 md:items-center max-h-full">
        <div className="md:w-1/2 flex justify-center p-4 ">
          <Image src={image} alt={title} width={550} height={300} />
        </div>

        <div className="md:w-1/2 flex flex-col gap-2 text-white justify-center">
          <h4 className="text-2xl">{title}</h4>

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
