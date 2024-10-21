import Skill from "@/components/about/Skill";
import { Skill as SkillType } from "@/types";

const SKILL_LIST: SkillType[] = [
  {
    name: "JavaScript",
    years: 8,
    logo: "javascript.svg",
  },
  {
    name: "Git",
    years: 8,
    logo: "git.svg",
  },
  {
    name: "React",
    years: 7,
    logo: "react.svg",
  },
  {
    name: "TypeScript",
    years: 6,
    logo: "typescript.svg",
  },
  {
    name: "CircleCi",
    years: 5,
    logo: "circleci.svg",
  },
  {
    name: "Next.js",
    years: 4,
    logo: "nextjs.svg",
  },
  {
    name: "AWS",
    years: 4,
    logo: "aws.svg",
  },
  {
    name: "React Native",
    years: 3,
    logo: "react-native.svg",
  },
  {
    name: "Tailwind CSS",
    years: 3,
    logo: "tailwindcss.svg",
  },
  {
    name: "GraphQL",
    years: 3,
    logo: "graphql.svg",
  },
  {
    name: "PHP",
    years: 3,
    logo: "php.svg",
  },
  {
    name: "Material UI",
    years: 3,
    logo: "materialui.svg",
  },
  {
    name: "NodeJS",
    years: 2,
    logo: "nodejs.svg",
  },
  {
    name: "Google Cloud",
    years: 2,
    logo: "google-cloud.svg",
  },
  {
    name: "Angular",
    years: 2,
    logo: "angular.svg",
  },
  {
    name: "DaisyUI",
    years: 2,
    logo: "git.svg",
  },
  {
    name: "Supabase",
    years: 1,
    logo: "supabase.svg",
  },
];

export default function Skills() {
  return (
    <div className="flex flex-wrap gap-x-14 gap-y-8 max-w-[950px] mx-auto justify-center">
      {SKILL_LIST.map((skill) => (
        <Skill skill={skill} />
      ))}
    </div>
  );
}
