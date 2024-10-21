"use client";

import Tippy from "@tippyjs/react";
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
}

const ProjectLarge: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
  techniques,
  image,
  order,
  totalProjects,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-fade-blue rounded-3xl relative p-10 text-left">
      {/* Order number and title */}
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

      <div className="flex flex-col md:flex-row w-full md:gap-10">
        {/* Image section */}
        <div className="w-1/2 flex justify-center mb-4 md:mb-0">
          <img src={image} alt={title} className="max-w-full" />
        </div>

        <div className="w-1/2 flex flex-col gap-2 text-white justify-center">
          <h4 className="text-2xl">{title}</h4>

          <div className="mb-4 max-w-96 text-justify">{children}</div>

          {/* Techniques */}
          <div className="flex flex-wrap gap-4">
            {techniques.map((tech, index) => (
              <div key={index} className="flex items-center gap-2">
                <Tippy content={tech.name}>
                  <img src={tech.logo} alt={tech.name} className="w-14 h-14" />
                </Tippy>
                {/* <span>{tech.name}</span> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLarge;
