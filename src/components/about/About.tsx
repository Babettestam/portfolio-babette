import Skills from "@/components/about/Skills";

export default function About() {
  return (
    <div className="grid responsive-grid py-5">
      <div className="col-start-2 text-center">
        <h2>About me</h2>
        <h3 className="mt-5">Skills</h3>
        <p className="max-w-[500px] text-justify mx-auto my-10">
          After finishing my studies at Rotterdam University of Applied
          Sciences, the front-end development world was changing a lot. React
          and typescript where gaining popularity and I started to evolve my
          skills there. Not only as an employee I grew in front-end development,
          but also with my own company I kept growing my skills in full-stack by
          making websites for others.{" "}
        </p>
        <Skills />
      </div>
    </div>
  );
}
