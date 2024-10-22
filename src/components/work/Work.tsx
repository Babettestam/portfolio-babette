import SlideIn from "@/components/SlideIn";
import ProjectLarge from "@/components/work/ProjectLarge";
import ProjectSmall from "@/components/work/ProjectSmall";

const TOTAL_PROJECTS = 3;

export default function Work() {
  return (
    <div className="grid responsive-grid pb-40 pt-10" id="work">
      <div className="col-start-2 text-center">
        <SlideIn>
          <h2 className="mb-4">My Recent Work</h2>
        </SlideIn>
        <div className="flex flex-col gap-y-5">
          <SlideIn>
            <ProjectLarge
              title="EndPointy.io"
              techniques={[
                { logo: "/logos/react.svg", name: "React" },
                { logo: "/logos/nextjs.svg", name: "Next.js" },
                { logo: "/logos/tailwindcss.svg", name: "TailwindCSS" },
                { logo: "/logos/typescript.svg", name: "TypeScript" },
                { logo: "/logos/supabase.svg", name: "Supabase" },
              ]}
              image="/images/endpointy.png"
              order={1}
              totalProjects={TOTAL_PROJECTS}
              link="https://endpointy.io"
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
          <SlideIn>
            <div className="flex flex-col gap-5 md:flex-row w-full">
              <ProjectSmall
                title="BonScanAI"
                techniques={[
                  { logo: "/logos/react.svg", name: "React" },
                  { logo: "/logos/nextjs.svg", name: "Next.js" },
                  { logo: "/logos/tailwindcss.svg", name: "TailwindCSS" },
                  { logo: "/logos/react-native.svg", name: "React Native" },
                  { logo: "/logos/typescript.svg", name: "TypeScript" },
                  { logo: "/logos/supabase.svg", name: "Supabase" },
                ]}
                image="/images/bonscanai.png"
                order={2}
                totalProjects={TOTAL_PROJECTS}
                backgroundColor="beige"
                link="https://bonscanai.nl"
              />

              <ProjectSmall
                title="SB Maint"
                techniques={[
                  { logo: "/logos/wordpress.png", name: "Wordpress" },
                  { logo: "/logos/elementor.png", name: "Elementor" },
                ]}
                image="/images/sbmaint.png"
                order={3}
                totalProjects={TOTAL_PROJECTS}
                backgroundColor="purple"
                link="https://sbmaint.nl"
              />
            </div>
          </SlideIn>
        </div>
      </div>
    </div>
  );
}
