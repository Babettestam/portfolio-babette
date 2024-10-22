import SlideIn from "@/components/SlideIn";
import ProjectLarge from "@/components/work/ProjectLarge";
// import ProjectSmall from "@/components/work/ProjectSmall";

const techniquesExample = [
  { logo: "/logos/react.svg", name: "React" },
  { logo: "/logos/nextjs.svg", name: "Next.js" },
  { logo: "/logos/tailwindcss.svg", name: "TailwindCSS" },
  // { logo: "/path/to/vercel.svg", name: "Vercel" },
];

const TOTAL_PROJECTS = 3;

export default function Work() {
  return (
    <div className="grid responsive-grid pb-40 pt-10">
      <div className="col-start-2 text-center">
        <SlideIn>
          <h2 className="mb-4">My Recent Work</h2>
        </SlideIn>
        <SlideIn>
          <ProjectLarge
            title="EndPointy.io"
            techniques={techniquesExample}
            image="/images/endpointy.png"
            order={1}
            totalProjects={TOTAL_PROJECTS}
          >
            <div>
              <p>
                I love building innovative and helpfull tools for others. It
                started as solving one of my own itches, by having a quick way
                of creating a mock API.
              </p>
              <p>
                It was a great chance to evolve my skills, not only with
                programming, but also in concepting, design, marketing and
                sales. All very interesting topics that help me be a better
                developer in the end.
              </p>
            </div>
          </ProjectLarge>
        </SlideIn>
        {/* <SlideIn>
          <div className="flex gap-4">
            <ProjectSmall
              title="BonScanAI"
              content={<p>Scan your invoices and we do the rest...</p>}
              techniques={techniquesExample}
              image="images/bonscanai.png"
              order={2}
              totalProjects={TOTAL_PROJECTS}
            />

            <ProjectSmall
              title="SB Maint"
              content={<p>SB Maint helps you manage maintenance work...</p>}
              techniques={techniquesExample}
              image="images/sbmaint.png"
              order={3}
              totalProjects={TOTAL_PROJECTS}
            />
          </div>
        </SlideIn> */}
      </div>
    </div>
  );
}
