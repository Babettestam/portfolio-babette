import React from "react";

interface Technique {
  logo: string; // URL or component for logo
  name: string;
}

interface Props {
  title: string;
  content: React.ReactNode;
  techniques: Technique[];
  image: string; // URL of the image
  order: number;
  totalProjects: number;
}

const ProjectSmall: React.FC<Props> = ({
  title,
  content,
  techniques,
  image,
  order,
  totalProjects,
}) => {
  return (
    <div className="flex flex-col items-center mb-16">
      {/* Order number and title */}
      <div className="flex flex-col items-start md:items-center w-full mb-4">
        <h2 className="text-lg text-gray-500 mb-2">
          {order.toString().padStart(2, "0")} / {totalProjects}
        </h2>
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>

      <div className="flex flex-col justify-between w-full">
        {/* Image section */}
        <div className="w-full flex justify-center mb-4">
          <img
            src={image}
            alt={title}
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>

        {/* Content and techniques */}
        <div className="w-full flex flex-col">
          <div className="mb-4">{content}</div>

          {/* Techniques */}
          <div className="flex flex-wrap gap-4">
            {techniques.map((tech, index) => (
              <div key={index} className="flex items-center">
                <img src={tech.logo} alt={tech.name} className="w-8 h-8 mr-2" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSmall;
