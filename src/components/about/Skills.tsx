import Skill from "@/components/about/Skill";
import { SKILL_LIST } from "@/data/skillsData";

export default function Skills() {
  return (
    <div className="flex flex-wrap gap-x-4 md:gap-x-14 gap-y-8 max-w-[950px] mx-auto justify-center">
      {SKILL_LIST.map((skill) => (
        <Skill skill={skill} key={skill.name} />
      ))}
    </div>
  );
}
